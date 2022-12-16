// Sample NodeJS code on your server.
import * as jwtLib from "jsonwebtoken";

//const RSA = require('node-rsa');
const YOUR_PRIVATE_RSA_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAq3hK3GMxWWq51jwlBIFGyTQUaSwHI+0m21VVk0+9ffao+Xqs
Zvw0rOuICxcf7TogxZcKrzxZU8E8o1xDRV7e08MbyzAc3XBcqHr61Lh5FKtn3eQQ
V1xbBJb3Zj9IQgK/HIC9lMMDZa6/gGMYVWea1CBuqaNi4npCBxbJogIQpiqW1skH
O1CGraB2hB99nUGso1vZEGKRnTte6/IvnSGqWs8Bs5Vi6hLLBO5Rc9XbTbXqTgx/
oi04PWvjVZ6mmF8xL54Du/XLK09uvcsX1DaMfyQZdd3yQhGNzu5m0usNSzKVJGaS
arCALgJOk65ow6up4HuC3zf9NIF3gDkLjCvEAwIDAQABAoIBAFO9baHv93vZuWQ8
/z8R+4Xrn0Q1sk8DVIStShulR7+qpJ8iH+wzo24HoOr5oifyyWp190vZRy62Im0N
c/T+/gehM4OpvY8PftDxLmqQpOFJTHJ7HNftTK4TJEOVCC7ktHyxCuUJ0DDqhK+o
tYuQC3cpV6IVHwfH+VMI9/Pc2lCrkzyF1uyOdpvHkPrZ82PfMpgnb+ax7clPFFbD
it1verGbC1395L9gMYmMBwkkXIk0aqs9bgX6jiTmZaJRvaT3omBD/u3dbRVVWAAQ
VWTaP+A79sjACDgBFzGEmDntzfPwXXCRlHtl360MkAhk+7PsvcAqxSJinfYPVdvv
MUg1rRECgYEA2DSIA690GFv4TgCxOtERnjbiSIFrCwxEHAYCubnBRD4rEmZ8zIQU
UfvVs2H4WkMWx6JiD4hj1BkvetO3kkbrrJhuCJbZN6QSwohq5YNJOwuruLuQWWP7
dpKRk2cDOekj/bjAdZseZJx6+myq8dG/cS7dK7+7xRfvk01E07jdvQcCgYEAywfb
uatEoEaRzetGmjj+nzOnPFVMj9WqgrIKxTWhYK4im3Pc2Umn48UEM1xFqcHgKgxF
V731kuvPapjpTaE30oddCPetY7kg08YZFAY5UGhKI2vpSccvIeq7SkqA6v8lHseX
azx90J15+oN303bi4b4sCAZKvNlrjBfpH1a6fiUCgYB7tVsaGLtp8L3cDANcryHQ
kIDbkcmo8aTLEBlhIctW++dzSNchwnVKD7nQQT90jiyrn9tSHe1Y/+wt8JR6C0Bw
amuTWJUDhEsDqkDYAE3Xji78rb3DmDTbPLQ1Tl0HNsJUO/FLma1DTlIDlkgdw7Ex
1unQTY3oEXEQrMa0CnQ94wKBgAdnc/Xjbw9BQ5P03pBFP9PieFjU64PbUOqPP6FN
gWMbNpvgr88kxoCh8LNGzCuSrHAcHnNCtC/1dYz3opp4JKcC1Lu8/I/EcpQGh2eZ
ioGKLBn6l3lfUDK2croU2Xq4b0weD0GT5Sq0c3xVSwtlLIT7AHQSdqtIaomjXZcM
/KQZAoGAWsz8mpXkVjo16wzXMZ0yCKrNBt9XQ61aGC6+mc+QCPMIpvMXZt703Wzk
pYWbUfvyUHy9OtgAZfSKOrVPRvybf9v1OvM8Rethq98EpRw5Txdb1vVB7sPwODqA
usqBHIHIm7CeavHWfUVNv9bjfB6aJXQDEMQ7+7YlM8wEfDcxj1U=
-----END RSA PRIVATE KEY-----`


//const rsaKey = new RSA(process.env.PUBLIC_IBM_RSA_KEY);

/**
* Returns a signed JWT. Optionally, also adds an encrypted user_payload. 
* The userPayload is stringified JSON.
*/
export function mockLogin(req, res, next) {
    const defaultUserID = "uuid";
    const userID = req.query.phone_number|| defaultUserID;
    const payload = {
        iss: 'better-chat-saul.com',
        sub: req.query.phone_number|| defaultUserID,
        // user_payload: {
        //     department: userID!=defaultUserID? "VIP": "DONT_ANSWER"
        // }
      };
      // The "expiresIn" option adds an "exp" claim to the payload.
      console.log(payload.sub);
      const jwt= jwtLib.default.sign(
        payload,
        YOUR_PRIVATE_RSA_KEY,
        {algorithm: 'RS256', expiresIn: '48h'}
      );
      console.log(jwt);
      res.json({
        jwt
      });
    
}

