pragma solidity ^0.5.0;

contract Demo {
  uint public dataCount = 0;
  mapping(uint => Datum) public data;

  struct Datum {
    uint id;
    string content;
  }

  event DatumCreated(
    uint id,
    string content
  );

  constructor() public {
    createDatum("Initial datum");
  }

  function createDatum(string memory _content) public {
    dataCount ++;
    data[dataCount] = Datum(dataCount, _content);
    emit DatumCreated(dataCount, _content);
  }

  
}

