/*====================================================================
	這是 katex 範例 :

		使用 katex_render_single 更改動態的物件
		使用 katex_render_all 更改靜態的物件


======================================================================*/

function katex_render_single(_id,_str){
	katex.render(_str,document.getElementById(_id));
}


function katex_render_all(_dict){
	for(var _id in _dict){
		// value is latex-string
		katex.render(_dict[_id], document.getElementById(_id));
	}//endfor
}//_katex_rander
//==========================================================================


// ===== define dictionary ============  // 

katex_render_all(
	{	
		"constant_formula":"\\underbrace{\\displaystyle{\\int^{1}_{0}f(x)dx}}_{\\text{Definite Integral of } f}  ",
		"dynamic_formula":" = ??"
	}
);


function change_dynamic(){
	// 初始化按鈕的狀態 (宣告 state variable)
	if(typeof change_dynamic.state == 'undefined' ) {
        change_dynamic.state = 0;
    }//endif
	
	// 利用同餘運算決定按鈕後的情況
	if(change_dynamic.state %4 == 0){
		katex.render("= \\displaystyle{\\underbrace{\\lim_{n \\rightarrow \\infty } \\frac{1}{n} \\cdot \\bigg[\\sum_{k=1}^{n} f\\left(\\frac{k}{n}\\right)  \\bigg] }_{\\text{Take Limit of Series (Right-Riemann-Sum)}}  }",document.getElementById("dynamic_formula"));
	}else if(change_dynamic.state %4 == 1){
		katex.render("= \\displaystyle{\\underbrace{F(1)-F(0) \\quad \\text{where } \\text{ closed-form } F \\text{ with } F' = f }_{\\text{2nd Fundamental Thm. of Calculus}} }",document.getElementById("dynamic_formula"));
	}else if(change_dynamic.state %4 == 2){
		katex.render("\\approx \\displaystyle{\\underbrace{ \\frac{1}{n} \\sum_{i = 1}^{n}{f(U_i)} \\quad \\text{where } U_i \\overset{i.i.d}{\\sim }\\text{uniform}(0,1) }_{\\text{Monte Carlo Simulation}} }",document.getElementById("dynamic_formula"));
	}else{ //change_dynamic.state %4 == 0
		katex.render("\\approx \\displaystyle{\\underbrace{\\frac{1}{2}\\sum_{i=1}^{n}\\omega_{i} f\\bigg(\\frac{x_i+1}{2} \\bigg) \\quad \\text{where }  \\omega_{i} = \\frac{2}{(1-x_i^2) P'_{n}(x_i)} \\text{ and find optimal abscissa } x_i \\text{ s.t } P_n(x_{i})= 0  }_{\\text{Gauss–Legendre Quadrature with } x_i \\in [-1,1] \\text{ and } P_n := \\text{Legendre Polynomial of Degree } n } }",document.getElementById("dynamic_formula"));
	}//end_else
	change_dynamic.state+=1
}