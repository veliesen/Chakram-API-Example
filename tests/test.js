const chakram = require('chakram');
expect=chakram.expect;

describe ('User Test Cases', function(){
    
    it ('POST v2/pet', function(){
        const userInfo={
  "id": 8,
  "category": {
    "id": 8,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 8,
      "name": "string"
    }
  ],
  "status": "available"
}
        const response=chakram.post ('https://petstore.swagger.io/v2/pet', userInfo);
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it ('POST v2/store/order', function(){
        const orderInfo ={
  "id": 3,
  "petId": 8,
  "quantity": 2,
  "shipDate": "2023-04-15T14:32:21.429Z",
  "status": "placed",
  "complete": true
}

        const response=chakram.post ("https://petstore.swagger.io/v2/store/order", orderInfo);
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it ('GET v2/store/order/3', function(){
        const response=chakram.get ("https://petstore.swagger.io/v2/store/order/3");
        expect(response).to.have.status(200);
        return chakram.wait();

    })

});
