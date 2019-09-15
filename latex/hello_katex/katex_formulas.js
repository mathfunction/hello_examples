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
		"constant_formula":"\\underbrace{\\displaystyle{\\int^{b}_{a}f(x)dx}}_{\\text{integration}}",
		"dynamic_formula":"\\sum_{a=0}^{b=3}"
	}
);


function change_dynamic(){
	katex.render("\\displaystyle{\\int_{a=0}^{b=1}}",document.getElementById("dynamic_formula"));
}