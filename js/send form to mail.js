const myForm = document.getElementById("myForm");
var reValeu;
// هدف الاستثمار
document.getElementById("improvedSourceOfIncome").oninput =  function () {
    if(document.getElementById("improvedSourceOfIncome").checked){
        reValeu = document.getElementById("improvedSourceOfIncome").value
    } if(document.getElementById("assetDevelopment").checked){
        reValeu = document.getElementById("assetDevelopment").value
    }
    if (document.getElementById("futurePlanning").checked){
        reValeu = document.getElementById("futurePlanning").value
    }
    if(document.getElementById("takeAdvantageOfInvestmentOpportunities").checked){
        reValeu = document.getElementById("takeAdvantageOfInvestmentOpportunities").value
    }
}
document.getElementById("assetDevelopment").oninput =  function () {
    if(document.getElementById("improvedSourceOfIncome").checked){
        reValeu = document.getElementById("improvedSourceOfIncome").value
    } if(document.getElementById("assetDevelopment").checked){
        reValeu = document.getElementById("assetDevelopment").value
    }
    if (document.getElementById("futurePlanning").checked){
        reValeu = document.getElementById("futurePlanning").value
    }
    if(document.getElementById("takeAdvantageOfInvestmentOpportunities").checked){
        reValeu = document.getElementById("takeAdvantageOfInvestmentOpportunities").value
    }
}
document.getElementById("futurePlanning").oninput =  function () {
    if(document.getElementById("improvedSourceOfIncome").checked){
        reValeu = document.getElementById("improvedSourceOfIncome").value
    } if(document.getElementById("assetDevelopment").checked){
        reValeu = document.getElementById("assetDevelopment").value
    }
    if (document.getElementById("futurePlanning").checked){
        reValeu = document.getElementById("futurePlanning").value
    }
    if(document.getElementById("takeAdvantageOfInvestmentOpportunities").checked){
        reValeu = document.getElementById("takeAdvantageOfInvestmentOpportunities").value
    }
}
document.getElementById("takeAdvantageOfInvestmentOpportunities").oninput =  function () {
    if(document.getElementById("improvedSourceOfIncome").checked){
        reValeu = document.getElementById("improvedSourceOfIncome").value
    } if(document.getElementById("assetDevelopment").checked){
        reValeu = document.getElementById("assetDevelopment").value
    }
    if (document.getElementById("futurePlanning").checked){
        reValeu = document.getElementById("futurePlanning").value
    }
    if(document.getElementById("takeAdvantageOfInvestmentOpportunities").checked){
        reValeu = document.getElementById("takeAdvantageOfInvestmentOpportunities").value
    }
}
var tadawel;
// خبرة في التداول
document.getElementById("junior").oninput =  function () {
    if(document.getElementById("junior").checked){
        tadawel = document.getElementById("junior").value
    } if(document.getElementById("average").checked){
        tadawel = document.getElementById("average").value
    }
    if (document.getElementById("excellent").checked){
        tadawel = document.getElementById("excellent").value
    }
    
}
document.getElementById("average").oninput =  function () {
    if(document.getElementById("junior").checked){
        tadawel = document.getElementById("junior").value
    } if(document.getElementById("average").checked){
        tadawel = document.getElementById("average").value
    }
    if (document.getElementById("excellent").checked){
        tadawel = document.getElementById("excellent").value

    }
    
}
document.getElementById("excellent").oninput =  function () {
    if(document.getElementById("junior").checked){
        tadawel = document.getElementById("junior").value

    } if(document.getElementById("average").checked){
        tadawel = document.getElementById("average").value

    }
    if (document.getElementById("excellent").checked){
        tadawel = document.getElementById("excellent").value

    }

}
var astthmar;
// فترة الاستثمار المتوقعة
document.getElementById("shortTerm").oninput =  function () {
    if(document.getElementById("shortTerm").checked){
        astthmar = document.getElementById("shortTerm").value
    } if(document.getElementById("mediumTerm").checked){
        astthmar = document.getElementById("mediumTerm").value
    }
    if (document.getElementById("longTerm").checked){
        astthmar = document.getElementById("longTerm").value
    }
    
}
document.getElementById("mediumTerm").oninput =  function () {
    if(document.getElementById("shortTerm").checked){
        astthmar = document.getElementById("shortTerm").value
    } if(document.getElementById("mediumTerm").checked){
        astthmar = document.getElementById("mediumTerm").value
    }
    if (document.getElementById("longTerm").checked){
        astthmar = document.getElementById("longTerm").value

    }
    
}
document.getElementById("longTerm").oninput =  function () {
    if(document.getElementById("shortTerm").checked){
        astthmar = document.getElementById("shortTerm").value

    } if(document.getElementById("mediumTerm").checked){
        astthmar = document.getElementById("mediumTerm").value

    }
    if (document.getElementById("longTerm").checked){
        astthmar = document.getElementById("longTerm").value
        
    }
    
}
var tdawol;
// حجم التداول
document.getElementById("LessThanContracts").oninput =  function () {
    if(document.getElementById("LessThanContracts").checked){
        tdawol = document.getElementById("LessThanContracts").value
    } if(document.getElementById("fift").checked){
        tdawol = document.getElementById("fift").value
    }
    if (document.getElementById("moreThan").checked){
        tdawol = document.getElementById("moreThan").value
    }
    
}
document.getElementById("fift").oninput =  function () {
    if(document.getElementById("LessThanContracts").checked){
        tdawol = document.getElementById("LessThanContracts").value
    } if(document.getElementById("fift").checked){
        tdawol = document.getElementById("fift").value
    }
    if (document.getElementById("moreThan").checked){
        tdawol = document.getElementById("moreThan").value

    }
    
}
document.getElementById("moreThan").oninput =  function () {
    if(document.getElementById("LessThanContracts").checked){
        tdawol = document.getElementById("LessThanContracts").value

    } if(document.getElementById("fift").checked){
        tdawol = document.getElementById("fift").value

    }
    if (document.getElementById("moreThan").checked){
        tdawol = document.getElementById("moreThan").value
        
    }
    
}
var lakb;
// اللقب
document.getElementById("theMaster").oninput =  function () {
    if(document.getElementById("theMaster").checked){
        lakb = document.getElementById("theMaster").value
    } if(document.getElementById("Ms").checked){
        lakb = document.getElementById("Ms").value
    }
    if (document.getElementById("Mss").checked){
        lakb = document.getElementById("Mss").value
    }
    
}
document.getElementById("Ms").oninput =  function () {
    if(document.getElementById("theMaster").checked){
        lakb = document.getElementById("theMaster").value
    } if(document.getElementById("Ms").checked){
        lakb = document.getElementById("Ms").value
    }
    if (document.getElementById("Mss").checked){
        lakb = document.getElementById("Mss").value

    }
    
}
document.getElementById("Mss").oninput =  function () {
    if(document.getElementById("theMaster").checked){
        lakb = document.getElementById("theMaster").value

    } if(document.getElementById("Ms").checked){
        lakb = document.getElementById("Ms").value

    }
    if (document.getElementById("Mss").checked){
        lakb = document.getElementById("Mss").value
        
    }
    
}
var wazeve;
// الوضع الوظيفي
document.getElementById("employee").oninput =  function () {
    if(document.getElementById("employee").checked){
        wazeve = document.getElementById("employee").value
    } if(document.getElementById("sahb").checked){
        wazeve = document.getElementById("sahb").value
    }
    if (document.getElementById("motka3d").checked){
        wazeve = document.getElementById("motka3d").value
    }
    if(document.getElementById("student").checked){
        wazeve = document.getElementById("student").value
    }
    if(document.getElementById("unemployed").checked){
        wazeve = document.getElementById("unemployed").value
    }
}
document.getElementById("sahb").oninput =  function () {
    if(document.getElementById("employee").checked){
        wazeve = document.getElementById("employee").value
    } if(document.getElementById("sahb").checked){
        wazeve = document.getElementById("sahb").value
    }
    if (document.getElementById("motka3d").checked){
        wazeve = document.getElementById("motka3d").value
    }
    if(document.getElementById("student").checked){
        wazeve = document.getElementById("student").value
    }
    if(document.getElementById("unemployed").checked){
        wazeve = document.getElementById("unemployed").value
    }
}
document.getElementById("motka3d").oninput =  function () {
    if(document.getElementById("employee").checked){
        wazeve = document.getElementById("employee").value
    } if(document.getElementById("sahb").checked){
        wazeve = document.getElementById("sahb").value
    }
    if (document.getElementById("motka3d").checked){
        wazeve = document.getElementById("motka3d").value
    }
    if(document.getElementById("student").checked){
        wazeve = document.getElementById("student").value
    }
    if(document.getElementById("unemployed").checked){
        wazeve = document.getElementById("unemployed").value
    }
}
document.getElementById("student").oninput =  function () {
    if(document.getElementById("employee").checked){
        wazeve = document.getElementById("employee").value
    } if(document.getElementById("sahb").checked){
        wazeve = document.getElementById("sahb").value
    }
    if (document.getElementById("motka3d").checked){
        wazeve = document.getElementById("motka3d").value
    }
    if(document.getElementById("student").checked){
        wazeve = document.getElementById("student").value
    }
    if(document.getElementById("unemployed").checked){
        wazeve = document.getElementById("unemployed").value
    }
}
document.getElementById("unemployed").oninput =  function () {
    if(document.getElementById("employee").checked){
        wazeve = document.getElementById("employee").value
    } if(document.getElementById("sahb").checked){
        wazeve = document.getElementById("sahb").value
    }
    if (document.getElementById("motka3d").checked){
        wazeve = document.getElementById("motka3d").value
    }
    if(document.getElementById("student").checked){
        wazeve = document.getElementById("student").value
    }
    if(document.getElementById("unemployed").checked){
        wazeve = document.getElementById("unemployed").value
    }
}

var inDollarsonlly;
var inDirhamsonlly;
        // Reset valou in 
        let inDirhams = document.getElementById("inDirhams");
        let inDollars = document.getElementById("inDollars");
        inDirhams.oninput = ()=>{
            inDollars.value = inDirhams.value / 3.67
        }
        inDollars.oninput = ()=>{
            inDirhams.value = inDollars.value * 3.67
        }
        
        // getCheckeValue()
        myForm.addEventListener("submit", (e)=>{
            e.preventDefault()
            let emailUS = document.getElementById("email").value
            let fullName = document.getElementById("fullName").value
            let phoneNumber = document.getElementById("phoneNumber").value
            let Nationality = document.getElementById("Nationality").value
            let BD = document.getElementById("BD").value
            let elbald = document.getElementById("elbald").value
            let CT = document.getElementById("CT").value
            let homeNumber = document.getElementById("homeNumber").value
            let manteka = document.getElementById("manteka").value
            let share3 = document.getElementById("share3").value
            let Employment = document.getElementById("Employment").value
            let numberOfYearsOfWork = document.getElementById("numberOfYearsOfWork").value
            let elsha4r = document.getElementById("elsha4r").value
            let yourFieldOfStudy = document.getElementById("yourFieldOfStudy").value
            let myDate = document.getElementById("myDate").value
            let signature = document.getElementById("signature").value
            
            inDollarsonlly = inDollars.value
            inDirhamsonlly = inDirhams.value

    myForm.reset();
    sendEmail(fullName ,emailUS ,phoneNumber ,Nationality,BD ,elbald ,CT ,homeNumber,manteka ,share3 ,homeNumber ,Employment ,numberOfYearsOfWork ,elsha4r ,yourFieldOfStudy ,myDate ,signature)
})
function sendEmail(fullName ,emailUS ,phoneNumber ,Nationality,BD ,elbald ,CT ,homeNumber , manteka ,share3 ,homeNumber ,Employment ,numberOfYearsOfWork ,elsha4r ,yourFieldOfStudy ,myDate ,signature) {
    Email.send({
        // this server host
        Host : "smtp.elasticemail.com",
        // Username accunt in smtp
        Username : "mahmoud18957321@gmail.com",
        // Password server accunt 1EF6244182B21902A5ABC8AB2DEF2B108031
        Password : "1EF6244182B21902A5ABC8AB2DEF2B108031",
        // Accunt Green
        To : 'mahmoud18957321@gmail.com',
        // Accunt Input user
        From : emailUS,
        // Subject msg
        Subject : " New Join 💫 ✨",
        Body : `
        <div style="direction: rtl;">
                <br><b style="font-size='20px'"> هدف الاستثمار :</b> <span style="font-size='15px'"> ${reValeu}</span> 
                <br><b style="font-size='20px'"> خبرة في التداول :</b> <span style="font-size='15px'">${tadawel} </span>
                <br><b style="font-size='20px'"> فترة الاستثمار المتوقعة :</b> <span style="font-size='15px'">${astthmar} </span>
                <br><b style="font-size='20px'"> المبلغ المتوقع للأستثمار : </b>
                <span style="font-size='15px'">(بالدولار ${inDollarsonlly} )</span>
                <span style="font-size='15px'">(بالدرهم ${inDirhamsonlly} )</span>
                <br><b style="font-size='20px'">حجم التداول المتوقع في الشهر بالعقود :</b> <span style="font-size='15px'">${tdawol} </span>
        </div>
        <hr>
        <div style="direction: rtl;">
                <br><b style="font-size='20px'"> اللقب :</b> <span style="font-size='15px'"> ${lakb}</span> 
                <br><b style="font-size='20px'"> الأسم بالكامل :</b> <span style="font-size='15px'">${fullName} </span>
                <br><b style="font-size='20px'">رقم الهاتف المحمول :</b> <span style="font-size='15px'">${phoneNumber} </span>
                <br><b style="font-size='20px'">الجنسية :</b> <span style="font-size='15px'">${Nationality} </span>
                <br><b style="font-size='20px'">البريد الالكتروني :</b> <span style="font-size='15px'">${emailUS} </span>
                <br><b style="font-size='20px'">تاريخ الولادة :</b> <span style="font-size='15px'">${BD} </span>
        </div>
        <hr>
        <div style="direction: rtl;">
                <br><b style="font-size='20px'"> البلد :</b> <span style="font-size='15px'"> ${elbald}</span> 
                <br><b style="font-size='20px'">المدينة :</b> <span style="font-size='15px'">${CT} </span>
                <br><b style="font-size='20px'">رقم الهاتف المحمول :</b> <span style="font-size='15px'">${phoneNumber} </span>
                <br><b style="font-size='20px'">المنطقة :</b> <span style="font-size='15px'">${manteka} </span>
                <br><b style="font-size='20px'">الشارع :</b> <span style="font-size='15px'">${share3} </span>
                <br><b style="font-size='20px'">رقم الهاتف المنزل :</b> <span style="font-size='15px'">${homeNumber} </span>
        </div>
        <hr>
        <div style="direction: rtl;">
                <br><b style="font-size='20px'"> الوضع الوضيفي :</b> <span style="font-size='15px'"> ${wazeve}</span> 
                <br><b style="font-size='20px'">اسم صاحب العمل :</b> <span style="font-size='15px'">${CT} </span>
                <br><b style="font-size='20px'">المسمي الوظيفي :</b> <span style="font-size='15px'">${phoneNumber} </span>
                <br><b style="font-size='20px'">مجال العمل :</b> <span style="font-size='15px'">${Employment} </span>
                <br><b style="font-size='20px'">عدد سنوات العمل :</b> <span style="font-size='15px'">${numberOfYearsOfWork} </span>
                <br><b style="font-size='20px'">الشاغر :</b> <span style="font-size='15px'">${elsha4r} </span>
                <br><b style="font-size='20px'">مجال دراستك :</b> <span style="font-size='15px'">${yourFieldOfStudy} </span>
        </div>
        <hr>
        <div style="direction: rtl;">
                <br><b style="font-size='20px'"> التاريخ :</b> <span style="font-size='15px'"> ${myDate}</span> 
                <br><b style="font-size='20px'">التوقيع :</b> <span style="font-size='15px'">${signature} </span>
        </div>
        `,
}).then(
        message => alert(message)
);
}
