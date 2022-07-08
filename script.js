function tinhTuoi(){
    let d = new Date();
    let year = d.getFullYear();
    let namSinh = document.getElementById('inputNamsinh').value;
    let tuoi = year - namSinh;
    if(namSinh>year||namSinh<0){
        document.getElementById('ket_qua_tinh_tuoi').innerHTML = 'Nhập sai!';
    }else{
        document.getElementById('ket_qua_tinh_tuoi').innerHTML = 'Tuổi hiện tại của bạn là: '+tuoi;
    }
}

function chanLe(){
    let kq = Math.floor(Math.random()*100);
    let Chan = document.getElementById('datcuoc_1').value;
    let Le = document.getElementById('datcuoc_2').value;
    let win = 0;
    let lose = 0;
    let kqbefor=[];
    let luotchoi = 0;
    if(kq%2===0 && datcuoc_1.checked){
        document.getElementById('ket_qua_chan_le').innerHTML = 'Bạn thắng! số ramdom: '+kq;
        let befor= 1;
        kqbefor.push(kq);
    } else if(kq%2!=0 && datcuoc_2.checked){
        document.getElementById('ket_qua_chan_le').innerHTML = 'Bạn Thắng! số ramdom: '+kq;
        let befor= 1;
        let kqbefor = kq;
    }else if(kq%2===0 && datcuoc_2.checked){
        document.getElementById('ket_qua_chan_le').innerHTML = 'Bạn thua! số ramdom: '+kq;
        let befor= 0;
        let kqbefor = kq;
    }
    else {
        document.getElementById('ket_qua_chan_le').innerHTML = 'Bạn thua! số ramdom: '+kq;
        let befor= 0;
        let kqbefor = kq;
    };
}

function bauCua(){
    // function array_is_unique_sort(array,size){
    //     //flag =  1 =>  tồn tại phần tử trùng nhau
    //     //flag =  0 =>  không tồn tại phần tử trùng nhau
    
    //     let flag = 0;
    //     for (let i = 0; i < size - 1; ++i) {
    //         if (array[i] == array[i + 1]) { 
    //             /*Tìm thấy 1 phần tử trùng là đủ và dừng vòng lặp*/
    //             flag = 1;
    //             break;
    //         }
    //     }
    //     return flag;
    // }
    let arrayBaucua = new Array();
    let a;
    let lacBaucua;
    for(i=1;i<4;i++){
        lacBaucua = Math.round(Math.random() * 4);
        arrayBaucua.push(lacBaucua);
    }
    //Xí ngầu ra hình gì
        //Xí ngầu 1
    if(arrayBaucua[0]==1){let xiNgau1 = "Bầu";arrayBaucua[0]= xiNgau1;}
    else if(arrayBaucua[0]===2){let xiNgau1 = "Cua";arrayBaucua[0]= xiNgau1;}
    else if(arrayBaucua[0]===3){let xiNgau1 = "Cá";arrayBaucua[0]= xiNgau1;}
    else if(arrayBaucua[0]===4){let xiNgau1 = "Cọp";arrayBaucua[0]= xiNgau1;}
    else if(arrayBaucua[0]===5){let xiNgau1 = "Nai";arrayBaucua[0]= xiNgau1;}
    else {let xiNgau1 = "Gà";arrayBaucua[0]= xiNgau1;}
        //Xí ngầu 2
    if(arrayBaucua[1]===1){let xiNgau2 = "Bầu"; arrayBaucua[1]= xiNgau2;}
    else if(arrayBaucua[1]===2){let xiNgau2 = "Cua"; arrayBaucua[1]= xiNgau2;}
    else if(arrayBaucua[1]===3){let xiNgau2 = "Cá";arrayBaucua[1]= xiNgau2;}
    else if(arrayBaucua[1]===4){let xiNgau2 = "Cọp";arrayBaucua[1]= xiNgau2;}
    else if(arrayBaucua[1]===5){let xiNgau2 = "Nai";arrayBaucua[1]= xiNgau2;}
    else {let xiNgau2 = "Gà";arrayBaucua[1]= xiNgau2;}
        //Xí ngầu 3
    if(arrayBaucua[2]===1){let xiNgau3 = "Bầu";arrayBaucua[2]= xiNgau3;}
    else if(arrayBaucua[2]===2){let xiNgau3 = "Cua";arrayBaucua[2]= xiNgau3;}
    else if(arrayBaucua[2]===3){let xiNgau3 = "Cá";arrayBaucua[2]= xiNgau3;}
    else if(arrayBaucua[2]===4){let xiNgau3 = "Cọp";arrayBaucua[2]= xiNgau3;}
    else if(arrayBaucua[2]===5){let xiNgau3 = "Nai";arrayBaucua[2]= xiNgau3;}
    else {let xiNgau3 = "Gà";arrayBaucua[2]= xiNgau3;};
    //In lấc xí ngầu
    document.getElementById('xiNgau').innerHTML = 'Kết quả lắc xí ngầu: '+ arrayBaucua[0]+'-'+arrayBaucua[1]+'-'+arrayBaucua[2];
    
     //Create an Array.
     var arrayChoncuoc = new Array();
 
     //Reference the Table.
     var khuVuccuoc = document.getElementById("khuVuccuoc");

     //Reference all the CheckBoxes in Table.
     var chks = khuVuccuoc.getElementsByTagName("INPUT");

     // Loop and push the checked CheckBox value in Array.
     for (var i = 0; i < chks.length; i++) {
         if (chks[i].checked) {
            arrayChoncuoc.push(chks[i].value);
         }
     }

     //Display the selected CheckBox values.
     if (arrayChoncuoc.length > 0) {
        document.getElementById('ket_qua_dat_cuoc').innerHTML = 'Bạn đặt cược: '+arrayChoncuoc;
     }
     const sameArray = JSON.stringify(arrayChoncuoc) === JSON.stringify(arrayBaucua);
    //Kiểm tra kết quả
   
    //  array_is_unique_sort(ketQua,ketQua.length);
    //  //Kiểm tra phần tử trùng nhau
    // let check1 = array_is_unique_sort(ketQua,ketQua.length);
    // if (check1 == 1) document.getElementById('ketQua1').innerHTML = ' Bạn cược đúng';
    // else document.getElementById('ketQua1').innerHTML ='Bạn cược sai!';
    // //Lấy phần tử trùng nhau
    // let result = [];
    // let count = 0;
    // for (let i = 0; i < 3 - 1; ++i) {
    //     for (let j = i + 1; j < 3; ++j) {
    //         if (arrayBaucua[i] == arrayChoncuoc[j]) {
    //             /*Tìm thấy phần tử trùng thì thêm vào mảng kết quả*/
    //             result[count]=arrayChoncuoc[i];
    //             ++ count;
    //         }
    //     }
    // }
    // return result
}
function chonCuoc(){
    if(chkBau.checked||chkCa.checked||chkCop.checked||chkCua.checked||chkGa.checked||chkNai.checked){
        document.getElementById('btnCuoc').innerHTML='<button onclick="bauCua()">Xong</button>';
    }else document.getElementById('btnCuoc').innerHTML='';
}
function baiCao(){
    let arrayBaimay=[];
    let arrayBainguoi = [];
    let baiMay;
    let baiNguoi;
    let diemBaimay=0;
    let diemBainguoi=0;
    for(i=1;i<4;i++){
        baiMay = Math.round(Math.random() * 12)+1;
        arrayBaimay.push(baiMay); 
    }
    diemBaimay = arrayBaimay[0] + arrayBaimay[1] + arrayBaimay[2];
    //Xử lý 3 lá bài J Q K
    let diemDu1=0;
    let diemDu2=0;
    let diemDu3=0;
    let diemDu4=0;
    let diemDu5=0;
    let diemDu6=0;
    switch(arrayBaimay[0]){
        case 11:
            diemDu1= diemDu1+1;break;
        case 12:
            diemDu1= diemDu1+2;break;
        case 13:
            diemDu1= diemDu1+3;break;
        default:
            diemDu1=0;break;
    }
    switch(arrayBaimay[1]){
        case 11:
            diemDu2= diemDu2+1;break;
        case 12:
            diemDu2= diemDu2+2;break;
        case 13:
            diemDu2= diemDu2+3;break;
        default:
            diemDu2=0;break;
    }
    switch(arrayBaimay[2]){
        case 11:
            diemDu3= diemDu3+1;break;
        case 12:
            diemDu3= diemDu3+2;break;
        case 13:
            diemDu3= diemDu3+3;break;
        default:
            diemDu3=0;break;
    }
  
    //Tính điểm bài Máy
    if((diemBaimay<20)&&(diemBaimay>=10)){
        diemBaimay= diemBaimay - 10 -diemDu1-diemDu2-diemDu3;
        document.getElementById('ketQuabaiMay').innerHTML='Điểm của máy: '+diemBaimay;
    }else if((diemBaimay<30)&&(diemBaimay>=20)){
        diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3;
        if(diemBaimay<0&&arrayBaimay[0]==11){
            diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+1;
        }
        else if(diemBaimay<0&&arrayBaimay[0]==12)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+2;
        else if(diemBaimay<0&&arrayBaimay[0]==13)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+3;
        else if(diemBaimay<0&&arrayBaimay[1]==11)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+1;
        else if(diemBaimay<0&&arrayBaimay[1]==12)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+2;
        else if(diemBaimay<0&&arrayBaimay[1]==13)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+3;
        else if(diemBaimay<0&&arrayBaimay[2]==11)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+1;
        else if(diemBaimay<0&&arrayBaimay[2]==12)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+2;
        else if(diemBaimay<0&&arrayBaimay[2]==13)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+3;
        else if(diemBaimay<0&&arrayBaimay[0]==11&&arrayBaimay[1]==12&&arrayBaimay[2]==13)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+6;
        else if(diemBaimay<0&&arrayBaimay[1]==11&&arrayBaimay[2]==12&&arrayBaimay[0]==13)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+6;
        else if(diemBaimay<0&&arrayBaimay[2]==11&&arrayBaimay[0]==12&&arrayBaimay[1]==13)diemBaimay= diemBaimay - 20-diemDu1-diemDu2-diemDu3+6;
        document.getElementById('ketQuabaiMay').innerHTML='Điểm của máy: '+diemBaimay;
    }else if((diemBaimay<40)&&(diemBaimay>=30)&&(diemBaimay<=33)){
        diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3;
        if(diemBaimay<0&&arrayBaimay[0]==11){
            diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+1;
        }
        else if(diemBaimay<0&&arrayBaimay[0]==12)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+2;
        else if(diemBaimay<0&&arrayBaimay[0]==13)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+3;
        else if(diemBaimay<0&&arrayBaimay[1]==11)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+1;
        else if(diemBaimay<0&&arrayBaimay[1]==12)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+2;
        else if(diemBaimay<0&&arrayBaimay[1]==13)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+3;
        else if(diemBaimay<0&&arrayBaimay[2]==11)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+1;
        else if(diemBaimay<0&&arrayBaimay[2]==12)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+2;
        else if(diemBaimay<0&&arrayBaimay[2]==13)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+3;
        else if(diemBaimay<0&&arrayBaimay[0]==11&&arrayBaimay[1]==12&&arrayBaimay[2]==13)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+6;
        else if(diemBaimay<0&&arrayBaimay[1]==11&&arrayBaimay[2]==12&&arrayBaimay[0]==13)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+6;
        else if(diemBaimay<0&&arrayBaimay[2]==11&&arrayBaimay[0]==12&&arrayBaimay[1]==13)diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3+6;
        document.getElementById('ketQuabaiMay').innerHTML='Điểm của máy: '+diemBaimay;
    }
    // else if((diemBaimay<50)&&(diemBaimay>=30)&&((diemBaimay>=33)||(diemBaimay>=34)||(diemBaimay>=35)||(diemBaimay>=36)||(diemBaimay>=37)||(diemBaimay>=38)||(diemBaimay>=39)||(diemBaimay>=40)||(diemBaimay>=41))){
    //     // diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3;
    //     document.getElementById('ketQuabaiMay').innerHTML='Điểm của máy 3: Ba cào'; }
    else document.getElementById('ketQuabaiMay').innerHTML='Điểm của máy: '+diemBaimay;


    for(i=1;i<4;i++){
        baiNguoi = Math.round(Math.random() * 12)+1;
        arrayBainguoi.push(baiNguoi);
    }
    diemBainguoi = arrayBainguoi[0]+ arrayBainguoi[1]+ arrayBainguoi[2];
    switch(arrayBainguoi[0]){
        case 11:
            diemDu4= diemDu4+1;break;
        case 12:
            diemDu4= diemDu4+2;break;
        case 13:
            diemDu4= diemDu4+3;break;
        default:
            diemDu4=0;break;
    }
    switch(arrayBainguoi[1]){
        case 11:
            diemDu5= diemDu5+1;break;
        case 12:
            diemDu5= diemDu5+2;break;
        case 13:
            diemDu5= diemDu5+3;break;
        default:
            diemDu5=0;break;
    }
    switch(arrayBainguoi[2]){
        case 11:
            diemDu6= diemDu6+1;break;
        case 12:
            diemDu6= diemDu6+2;break;
        case 13:
            diemDu6= diemDu6+3;break;
        default:
            diemDu6=0;break;
        
    }
   //Tính điểm bài Người
   if((diemBainguoi<20)&&(diemBainguoi>=10)){
    diemBainguoi= diemBainguoi - 10 -diemDu4-diemDu5-diemDu6;
    document.getElementById('ketQuabaiNguoi').innerHTML='Điểm của bạn: '+diemBainguoi;
}else if((diemBainguoi<30)&&(diemBainguoi>=20)){
    diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6;
    if(diemBainguoi<0&&arrayBainguoi[0]==11){
        diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6;
    }
    else if(diemBainguoi<0&&arrayBainguoi[0]==12)diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6+2;
    else if(diemBainguoi<0&&arrayBainguoi[0]==13)diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6+3;
    else if(diemBainguoi<0&&arrayBainguoi[1]==11)diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6+1;
    else if(diemBainguoi<0&&arrayBainguoi[1]==12)diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6+2;
    else if(diemBainguoi<0&&arrayBainguoi[1]==13)diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6+3;
    else if(diemBainguoi<0&&arrayBainguoi[2]==11)diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6+1;
    else if(diemBainguoi<0&&arrayBainguoi[2]==12)diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6+2;
    else if(diemBainguoi<0&&arrayBainguoi[2]==13)diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6+3;
    else if(diemBainguoi<0&&arrayBainguoi[0]==11&&arrayBainguoi[1]==12&&arrayBainguoi[2]==13)diemBainguoi= diemBainguoi - 2-diemDu4-diemDu5-diemDu6+6;
    else if(diemBainguoi<0&&arrayBainguoi[1]==11&&arrayBainguoi[2]==12&&arrayBainguoi[0]==13)diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6+6;
    else if(diemBainguoi<0&&arrayBainguoi[2]==11&&arrayBainguoi[0]==12&&arrayBainguoi[1]==13)diemBainguoi= diemBainguoi - 20-diemDu4-diemDu5-diemDu6+6;
    document.getElementById('ketQuabaiNguoi').innerHTML='Điểm của bạn: '+diemBainguoi;
}else if((diemBainguoi<40)&&(diemBainguoi>=30)&&(diemBainguoi<=33)){
    diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6;
    if(diemBainguoi<0&&arrayBainguoi[0]==11){
        diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+1;
    }
    else if(diemBainguoi<0&&arrayBainguoi[0]==12)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+2;
    else if(diemBainguoi<0&&arrayBainguoi[0]==13)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+3;
    else if(diemBainguoi<0&&arrayBainguoi[1]==11)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+1;
    else if(diemBainguoi<0&&arrayBainguoi[1]==12)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+2;
    else if(diemBainguoi<0&&arrayBainguoi[1]==13)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+3;
    else if(diemBainguoi<0&&arrayBainguoi[2]==11)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+1;
    else if(diemBainguoi<0&&arrayBainguoi[2]==12)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+2;
    else if(diemBainguoi<0&&arrayBainguoi[2]==13)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+3;
    else if(diemBainguoi<0&&arrayBainguoi[0]==11&&arrayBainguoi[1]==12&&arrayBainguoi[2]==13)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+6;
    else if(diemBainguoi<0&&arrayBainguoi[1]==11&&arrayBainguoi[2]==12&&arrayBainguoi[0]==13)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+6;
    else if(diemBainguoi<0&&arrayBainguoi[2]==11&&arrayBainguoi[0]==12&&arrayBainguoi[1]==13)diemBainguoi= diemBainguoi - 30-diemDu4-diemDu5-diemDu6+6;
    document.getElementById('ketQuabaiNguoi').innerHTML='Điểm của bạn: '+diemBainguoi;
}
// else if((diemBainguoi<50)&&(diemBainguoi>=30)&&((diemBainguoi>=33)||(diemBainguoi>=34)||(diemBainguoi>=35)||(diemBainguoi>=36)||(diemBainguoi>=37)||(diemBainguoi>=38)||(diemBainguoi>=39)||(diemBainguoi>=40)||(diemBainguoi>=41))){
//     // diemBaimay= diemBaimay - 30-diemDu1-diemDu2-diemDu3;
//     document.getElementById('ketQuabaiNguoi').innerHTML='Điểm của bạn: Ba cào';}
else document.getElementById('ketQuabaiNguoi').innerHTML='Điểm của bạn: '+diemBainguoi;



    //Lá bài 1 Máy
    if(arrayBaimay[0]==11){
        document.getElementById('laBai1May').innerHTML='J';
    }else if(arrayBaimay[0]==12){
        document.getElementById('laBai1May').innerHTML='Q';
    }
    else if(arrayBaimay[0]==13){
        document.getElementById('laBai1May').innerHTML='K';
    }
    else document.getElementById('laBai1May').innerHTML=arrayBaimay[0];
    //Lá bài 2 Máy
    if(arrayBaimay[1]==11){
        document.getElementById('laBai2May').innerHTML='J';
    }else if(arrayBaimay[1]==12){
        document.getElementById('laBai2May').innerHTML='Q';
    }
    else if(arrayBaimay[1]==13){
        document.getElementById('laBai2May').innerHTML='K';
    }
    else document.getElementById('laBai2May').innerHTML=arrayBaimay[1];
    //Lá bài 3 Máy
    if(arrayBaimay[2]==11){
        document.getElementById('laBai3May').innerHTML='J';
    }else if(arrayBaimay[2]==12){
        document.getElementById('laBai3May').innerHTML='Q';
    }
    else if(arrayBaimay[2]==13){
        document.getElementById('laBai3May').innerHTML='K';
    }
    else document.getElementById('laBai3May').innerHTML=arrayBaimay[2];
    //Lá bài 1 Người
    if(arrayBainguoi[0]==11){
        document.getElementById('laBai1Nguoi').innerHTML='J';
    }else if(arrayBainguoi[0]==12){
        document.getElementById('laBai1Nguoi').innerHTML='Q';
    }
    else if(arrayBainguoi[0]==13){
        document.getElementById('laBai1Nguoi').innerHTML='K';
    }
    else document.getElementById('laBai1Nguoi').innerHTML=arrayBainguoi[0];
    //Lá bài 2 Người
    if(arrayBainguoi[1]==11){
        document.getElementById('laBai2Nguoi').innerHTML='J';
    }else if(arrayBainguoi[1]==12){
        document.getElementById('laBai2Nguoi').innerHTML='Q';
    }
    else if(arrayBainguoi[1]==13){
        document.getElementById('laBai2Nguoi').innerHTML='K';
    }
    else document.getElementById('laBai2Nguoi').innerHTML=arrayBainguoi[1];
    //Lá bài 3 Người
    if(arrayBainguoi[2]==11){
        document.getElementById('laBai3Nguoi').innerHTML='J';
    }else if(arrayBainguoi[2]==12){
        document.getElementById('laBai3Nguoi').innerHTML='Q';
    }
    else if(arrayBainguoi[2]==13){
        document.getElementById('laBai3Nguoi').innerHTML='K';
    }
    else document.getElementById('laBai3Nguoi').innerHTML=arrayBainguoi[2];
    
    
    if((diemBaimay<diemBainguoi)&&(diemBainguoi>0)&&(diemBaimay>0)){
        document.getElementById('ketQuachungCuoc').innerHTML='WIN!';
    }else if((diemBaimay>diemBainguoi)&&(diemBaimay>0)&&(diemBainguoi>0)) document.getElementById('ketQuachungCuoc').innerHTML='LOSE!';
    else if((diemBaimay>diemBainguoi)&&(diemBaimay<0)||(diemBainguoi<0)) document.getElementById('ketQuachungCuoc').innerHTML='Lỗi!';
    else if((diemBaimay>diemBainguoi)&&(diemBaimay<0)||(diemBainguoi>0)) document.getElementById('ketQuachungCuoc').innerHTML='Lỗi!';
    else if((diemBaimay>diemBainguoi)&&(diemBaimay>0)||(diemBainguoi<0)) document.getElementById('ketQuachungCuoc').innerHTML='Lỗi!';
    else document.getElementById('ketQuachungCuoc').innerHTML='Hòa!';

}

