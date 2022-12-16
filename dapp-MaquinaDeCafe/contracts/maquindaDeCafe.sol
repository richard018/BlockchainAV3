pragma solidity >=0.7.0 <0.9.0;

contract maquinaDeCafe{
    uint public valorDoCafe;
    string sabor;
    bool valorInserido;
    address public cafeteria;

    constructor(uint _valor, string memory _sabor ){
        valorDoCafe =_valor;
        sabor = sabor; cafeteria =msg.sender;
    }
    
    function pedirCafe(string memory _saborsolicitado, uint _valorpedido)public{
        require(_valorpedido == valorDoCafe);
        valorInserido = true;
        sabor = _saborsolicitado;
    }
    
    function buscarSabor() view public returns(string memory){
        return sabor;
    }
}