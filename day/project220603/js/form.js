


    var mailLast = document.querySelectorAll('#mail_last > option');
    mailLast.forEach(function(el,idx){
        el.onclick = function(){
            document.signUp.mail_adr.value = mailLast[idx].value;
        }
    });

function subM(){
    var nwName = document.signUp.name.value;
    var nwId = document.signUp.id.value;
    var nwPsw = document.signUp.psw.value;
    var nwPswCh = document.signUp.psw_ch.value;
    var nwPhoneF = document.signUp.phone_f.value;
    var nwPhone = document.signUp.phone.value;
    var nwYear = document.signUp.year.value;
    var nwMonth = document.signUp.month.value;
    var nwDay = document.signUp.day.value;
    var nwMail = document.signUp.mail.value;
    var nwMailAdr = document.signUp.mail_adr.value;
    

    var nwInput = document.signUp.querySelectorAll('.import');
    var check = 0;
    nwInput.forEach(function(el,idx){
        if(nwInput[idx].value == ''){
          return check = 1;
        }
    });
    if(check == 1){
        alert('*표시가 된 작성란을 모두 채워주세요.');
        return check = 0;
    } 
    else if(nwPsw != nwPswCh){
        alert('비밀번호가 틀립니다.');
    }else if(nwYear.length != 4){
        alert('생년월일을 확인해주세요.');
    }else if(nwPhone.length < 7 || nwPhone.length > 8){
        alert('연락처 번호를 확인해주세요.');
    }else{
        alert('회원가입을 축하드립니다.');
    }
}