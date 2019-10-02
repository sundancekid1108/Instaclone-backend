# Instaclone-backend
- [x] Create account
- [x] Request Secret
- [x] Confirm Secret (Login)
- [x] Like / Unlike a photo
- [x] Comment on a photo
- [x] Search by user
- [x] Search by location
- [x] Follow User
- [x] Unfollow User
- [x] Edit my profile
- [x] See user profile
- [x] See MY profile
- [x] See the full photo

# JWT TOKEN사용법
1. mutation{requestSecret(email: "sundancekid1108@gmail.com")}

2. mutation{
  confirmSecret(
    email: "sundancekid1108@gmail.com",
    secret: "1에서 발급받은 키"
  )}
3. 발급받은 토큰 사용 
{
 	"Authorization": "Bearer KEY"
 }
 playground에서  HTTP HEADER에 값 넣기