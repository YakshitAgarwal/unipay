// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

contract UnipayEscrow {
    address public owner;

    struct EscrowDeposit {
        address token; // address(0) for ETH
        uint256 amount;
        bool released;
    }

    // receiver => list of deposits
    mapping(address => EscrowDeposit[]) public escrows;

    event FundsHeld(
        address indexed sender,
        address indexed receiver,
        address token,
        uint256 amount
    );
    event FundsReleased(
        address indexed receiver,
        address token,
        uint256 amount
    );

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function changeOwner(address newOwner) external onlyOwner {
        owner = newOwner;
    }

    // -------------------------
    // HOLD FUNDS (ETH)
    // -------------------------
    function holdETH(address receiver) external payable {
        require(msg.value > 0, "No ETH sent");

        escrows[receiver].push(
            EscrowDeposit({
                token: address(0),
                amount: msg.value,
                released: false
            })
        );

        emit FundsHeld(msg.sender, receiver, address(0), msg.value);
    }

    // -------------------------
    // HOLD FUNDS (ERC20)
    // -------------------------
    function holdERC20(
        address token,
        address receiver,
        uint256 amount
    ) external {
        require(amount > 0, "Amount is zero");

        IERC20(token).transferFrom(msg.sender, address(this), amount);

        escrows[receiver].push(
            EscrowDeposit({token: token, amount: amount, released: false})
        );

        emit FundsHeld(msg.sender, receiver, token, amount);
    }

    // -------------------------
    // RELEASE FUNDS
    // Called once receiver sets preference (off-chain)
    // -------------------------
    function releaseFunds(address receiver, uint256 index) external {
        EscrowDeposit storage deposit = escrows[receiver][index];
        require(!deposit.released, "Already released");

        deposit.released = true;

        if (deposit.token == address(0)) {
            // ETH
            (bool success, ) = payable(receiver).call{value: deposit.amount}(
                ""
            );
            require(success, "ETH transfer failed");
        } else {
            // ERC20
            IERC20(deposit.token).transfer(receiver, deposit.amount);
        }

        emit FundsReleased(receiver, deposit.token, deposit.amount);
    }

    // -------------------------
    // VIEW HELPERS
    // -------------------------
    function getEscrowCount(address receiver) external view returns (uint256) {
        return escrows[receiver].length;
    }
}
