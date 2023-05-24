
Node version: v14.17.3

API List:

\----------------------------------------------------

Sign-up API: http://localhost:3000/api/user/sign-up

Semple data:

{

"name":"Pankaj",

"email":"pankaj@gmail.com",

"password": "123456"

}

\-----------------------------------------------------

Sign-in API: http://localhost:3000/api/user/sign-in

Semple data:

{

"email":"pankaj@gmail.com",

"password": "123456"

}

\----------------------------------------------------

Create Product API: http://localhost:3000/api/product/create

Semple data:

x-access-token = <After sign-in through the above API you will get token>

{

"name":"Women T-Shirt",

"sku":"t-shirt-2",

"price": 99,

"quantity": 10

}

\----------------------------------------------------

http://localhost:3000/api/product/show/<product\_id>

x-access-token = <After sign-in through the above API you will get token>
