let ans = 0;
let num = "0";
let key = "";
let kigou = "";

//////////calc_run()のボタンを押したとき///////////

function calc_run(btn){
  if(!isNaN(btn)){
    if(kigou == "="){
      ans = 0;
      kigou = "";
    }
    if(!isNaN(key)){
      if(num == "0"){
        num = "" + btn;
      }else{
        num += "" + btn;
      }
      
    }else{
      num = "" + btn;
    }
    document.getElementById("output").innerHTML = num;
  }else{
    if(!isNaN(key)){
      if(kigou == ""){
        ans = num;
      }else{
      ans = eval(ans + kigou + num);
      num = "0";
      document.getElementById("output").innerHTML = ans;
      }}
    kigou = btn;
  }
  document.getElementById("type").innerHTML = kigou;
  key = btn;
}

//////////小数点」のボタンを押したとき///////////

function calc_period(){
  if(num.indexOf(".") < 0)
    num = "" + num + ".";
    key = 0;
    document.getElementById("output").innerHTML = num;
  
}

//////////イコールのボタンを押したとき///////////

function calc_equal(){
  if(key == "="){
    ans = 0;
    key = "";
  }else{
    if(kigou == ""){
      ans = num;
    }else{
    ans = eval(ans + kigou + num);
    key = "="
    }
  }
  num = "0";
  kigou = key;
  document.getElementById("output").innerHTML = ans;
  document.getElementById("type").innerHTML = key;
}

////////////////リセット押したとき////////////////

function calc_reset(){
  ans = 0
  num = "0"
  key = ""
  kigou = ""
  document.getElementById("output").innerHTML = ans;
  document.getElementById("type").innerHTML = key;
}

////////////////00を押したとき////////////////

function calc_zero2(btn){
  if(!isNaN(key)){
      if(!num == "0"){
        num += "00";
      }
  }
  document.getElementById("output").innerHTML = num;
}
