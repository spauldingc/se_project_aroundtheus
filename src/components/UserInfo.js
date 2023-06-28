
export default class UserInfo {
constructor(userName, userJob) {
this._userName = userName;
this._userJob = userJob;
}

getUserInfo(){
const userObject = {};
userObject["profileName"] =this._userName.textContent;
userObject["profileDescription"]= this._userJob.textContent;
return userObject;
}


setUserInfo(nameInfo, jobInfo){
    this._userName.textContent= nameInfo;
    this._userJob.textContent= jobInfo;
}

}