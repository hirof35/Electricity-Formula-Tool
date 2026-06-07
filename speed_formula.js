const functionSelect1=document.getElementById("speed_formula2");
const speed_formulaDiv=document.getElementById("speed_formulaDiv1");
function updateFormula1(){
            const selectFunction1=functionSelect1.value;
            let formulaText="";
            switch (selectFunction1) {
                case "speed":
                    formulaText="速度=距離÷時間";
                    break;
                case "distance":
                    formulaText="距離=速さ×時間";
                    break;
                case "time":
                    formulaText="時間=距離÷速さ";
                    break;
                default:
                    formulaText="";
            }
            speed_formulaDiv.textContent=formulaText;
        }
        functionSelect1.addEventListener("change",updateFormula1);
        updateFormula1();
