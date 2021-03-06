pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;
    
    function Lottery() public {
        manager = msg.sender;
    }
    
    // function is payable bc someone sends ether
    function enter() public payable {
        // require used for validation
       require(msg.value > .01 ether);
        players.push(msg.sender);
    }

    function random() private view returns (uint){
       return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public restricted {
       
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }
    
    modifier restricted() {
        assert(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns (address[]) {
        return players;
    }
}