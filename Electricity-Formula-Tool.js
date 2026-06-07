const electricity_Select1=document.getElementById("electricity1");
        const electricity_Div1=document.getElementById("official1");
        function update_electricity1(){
            const selectFunction1=electricity_Select1.value;
            let official_Text1="";
            switch (selectFunction1) {
                case "volt":
                    official_Text1="V=RI";
                    break;
                case "ohm":
                    official_Text1="R=V/I";
                    break;
                case "amps":
                    official_Text1="I=V/R";
                    break;
                default:
                    official_Text1="";
                    break;
            }
            electricity_Div1.textContent=official_Text1;
        }
        electricity_Select1.addEventListener("change",update_electricity1);
        update_electricity1();

        const electricity_Select2=document.getElementById("electricity2");
        const electricity_Div2=document.getElementById("official2");
        function update_electricity2(){
            const selectFunction2=electricity_Select2.value;
            let official_Text2="";
            switch (selectFunction2) {
                case "seriesConnectionResistor":
                    official_Text2="R=R1+R2+R3・・・";
                    break;
                case "parallelConnectionResistor":
                    official_Text2="R=1/R1+1/R2+1/R3・・・";
                    break;
                case "productOverSum":
                    official_Text2="R=R1×R2/R1+R2";
                    break;
                default:
                    official_Text2="";
                    break;
            }
            electricity_Div2.textContent=official_Text2;
        }
        electricity_Select2.addEventListener("change",update_electricity2);
        update_electricity2();

        const electricity_Select3=document.getElementById("electricity3");
        const electricity_Div3=document.getElementById("official3");
        function update_electricity3(){
            const selectFunction3=electricity_Select3.value;
            let official_Text3="";
            switch (selectFunction3) {
                case "resistance":
                    official_Text3="R=ρ(抵抗率)×L(長さ)/S(断面積)";
                    break;
                case "resistivity":
                    official_Text3="ρ(抵抗率)=R(抵抗)×L(長さ)/S(断面積)";
                    break;
                case "relationshipBetweenConductivityAndResistivity":
                    official_Text3="σ(導電率)=1/ρ(抵抗率)";
                    break;
                default:
                    official_Text3="";
                    break;
            }
            electricity_Div3.textContent=official_Text3;
        }
        electricity_Select3.addEventListener("change",update_electricity3);
        update_electricity3();

        const electricity_Select4=document.getElementById("electricity4");
        const electricity_Div4=document.getElementById("official4");
        function update_electricity4(){
            const selectFunction4=electricity_Select4.value;
            let official_Text4="";
            switch (selectFunction4) {
                case "definitionOfCurrent":
                    official_Text4="I(電流)=Q(電荷)/t(時間)";
                    break;
                case "PartialPressureFormula":
                    official_Text4="V1=(R1/R1+R2)×E(起電力),V2=(R2/R1+R2)×E(起電力)";
                    break;
                case "diversionFormula":
                    official_Text4="I1=(R1/R1+R2)×I(電流),I2=(R2/R1+R2)×I(電流)";
                    break;
                default:
                    official_Text4="";
                    break;
            }
            electricity_Div4.textContent=official_Text4;
        }
        // 各セレクトボックスに対する公式のデータ
const formulas = {
    // 既存の項目は省略...
    
    // 静電気の公式
    coulombLaw: "$$F = k \\frac{q_1 q_2}{r^2}$$",
    electricField: "$$E = \\frac{F}{q} = k \\frac{Q}{r^2}$$",
    electricPotential: "$$V = k \\frac{Q}{r}$$",
    
    // キルヒホッフの法則
    kirchhoffCurrent: "$$\\sum I_{in} = \\sum I_{out}$$",
    kirchhoffVoltage: "$$\\sum V_{source} = \\sum V_{drop}$$"
};

// イベントリスナーの追加例
document.getElementById('electricity5').addEventListener('change', function() {
    const outputDiv = document.getElementById('official5');
    const selected = this.value;
    
    if (formulas[selected]) {
        outputDiv.innerHTML = formulas[selected];
        // MathJaxに再計算を指示して数式をレンダリングさせる
        MathJax.typesetPromise();
    }
});
// 公式と説明文のデータ構造
const physicsData = {
    // 静電気
    coulombLaw: {
        formula: "$$F = k \\frac{q_1 q_2}{r^2}$$",
        description: "電荷 $q_1, q_2$ の間に働く力 $F$。距離 $r$ の2乗に反比例します（$r$ が2倍になると $F$ は $1/4$ になります）。"
    },
    electricField: {
        formula: "$$E = \\frac{F}{q} = k \\frac{Q}{r^2}$$",
        description: "単位電荷あたりの静電気力。その地点における電場の強さを表します。"
    },
    // キルヒホッフ
    kirchhoffCurrent: {
        formula: "$$\\sum I_{in} = \\sum I_{out}$$",
        description: "回路の任意の節点において、流れ込む電流の和と流れ出る電流の和は等しい（電荷保存の法則）。"
    },
    kirchhoffVoltage: {
        formula: "$$\\sum V_{source} = \\sum V_{drop}$$",
        description: "閉回路を一巡するとき、起電力の総和と電圧降下の総和は等しい（エネルギー保存の法則）。"
    }
};

// 共通の表示関数
function updateFormula(selectId, outputId) {
    const select = document.getElementById(selectId);
    const output = document.getElementById(outputId);
    const key = select.value;

    if (physicsData[key]) {
        output.innerHTML = `
            <div style="margin-top:10px; padding:10px; border-left: 5px solid #007bff; background:#f9f9f9;">
                <p><strong>公式:</strong> ${physicsData[key].formula}</p>
                <p><small>${physicsData[key].description}</small></p>
            </div>
        `;
        // MathJaxで数式を再レンダリング
        MathJax.typesetPromise();
    }
}

// イベントリスナー設定
document.getElementById('electricity5').addEventListener('change', () => updateFormula('electricity5', 'official5'));
document.getElementById('electricity6').addEventListener('change', () => updateFormula('electricity6', 'official6'));
        electricity_Select4.addEventListener("change",update_electricity4);
        update_electricity4();
