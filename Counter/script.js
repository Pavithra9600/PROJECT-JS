let num = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click",(event) =>{
        const styles = event.currentTarget.classList
        if(styles.contains("btn-danger")){
            num--;
        }else if(styles.contains("btn-success")){
            num++;
        }else{
            num = 0;
        }
        value.textContent = num;
        if(num>0){
            value.style.color = "green";
        }else if(num<0){
            value.style.color = "red";
        }else{
            value.style.color = "black"; 
        }
    });
});