/*=================================================================
	https://yuanchieh.page/posts/2020-01-01_webassembly-%E6%95%99%E5%AD%B8-%E5%9F%BA%E6%9C%AC%E9%81%8B%E7%AE%97%E9%99%A3%E5%88%97%E8%99%95%E7%90%86%E8%88%87%E6%8C%87%E9%87%9D/


emcc -std=c++11 emcc_test.cpp -s NO_EXIT_RUNTIME=1 -o emcc_test.js 
=================================================================*/


#include <emscripten/emscripten.h>
#include <iostream>





extern "C"{

	EMSCRIPTEN_KEEPALIVE
	int one(){
		return 1;
	}//end_test



	


}













