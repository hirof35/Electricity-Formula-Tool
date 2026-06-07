const functionSelect=document.getElementById("function");
        const formulaDiv=document.getElementById("formula");
        function updateFormula(){
            const selectFunction=functionSelect.value;
            let formulaText="";
            switch (selectFunction) {
                case "proportional":
                    formulaText="y=ax";
                    break;
                case "inverse_proportional":
                    formulaText="y=a/x";
                    break;
                case "liner_function":
                    formulaText="y=ax+b";
                    break;
                case "guadratic_function":
                    formulaText="y=ax^2";
                    break;
                default:
                    formulaText="";
            }
            formulaDiv.textContent=formulaText;
        }
        functionSelect.addEventListener("change",updateFormula);
        updateFormula();
