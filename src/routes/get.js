const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log("Get Test");

    res.json({ ok: true, users: "Get Test" });
});

// Beyuond Seoul
router.get('/home', (req, res) => {
    console.log("Home Test");

    const responseData = {
        "success": true,
        "code": 0,
        "msg": "성공하였습니다.",
        "data": {
          "profile": {
            "userName": "ella",
            "userImage": "https://youngsquad-bucket.s3.ap-northeast-2.amazonaws.com/ella_profile.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231119T081410Z&X-Amz-SignedHeaders=host&X-Amz-Expires=53999&X-Amz-Credential=AKIAZSDKSZQYOH2RWXME%2F20231119%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=4610987f50df6477e1d2a3f33b0e708e34473e9a256528078d8545c575b314e8"
          },
          "travelStatus": "AFTER_TRAVEL",
          "travel": {
            "travelId": 11,
            "travelName": "부산 여행중",
            "travelDate": "2023-1110 ~ 2023-1112",
            "travelFreinds": []
          },
          "reservations": null,
          "mission": {
            "missionComplete": {
              "team": 0,
              "person": 0,
              "daily": 0
            },
            "teamMission": {
              "id": 14,
              "title": "자갈치시장에서 흥정 해보기",
              "detail": null,
              "address": null
            },
            "personMission": {
              "id": 22,
              "title": "\"흰여울문화마을에서 바닷마을 산책하기\r\n\"\r\n",
              "detail": null,
              "address": null
            },
            "dailyMissionCount": "0/3",
            "dailyMissions": [
              {
                "id": 31,
                "title": "해변에서 모래에 글씨 써보기"
              },
              {
                "id": 32,
                "title": "부산사투리로 현지인에게 인사하기"
              },
              {
                "id": 33,
                "title": "광안대교와 함께 인증샷 찍기"
              }
            ]
          }
        }
    };

    res.json(responseData);
});

module.exports = router;