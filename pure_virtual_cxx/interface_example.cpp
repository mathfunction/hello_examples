/*========================================================
// C++17

// 介面物件  載入模板<T> ClassFuncList , 介面方法再呼叫 T 方法




========================================================*/


#include <vector>
#include <iostream>


//=======================================================================================================================================

// 抽象函數方法
struct AbsFuncList{
	void* (*clone_)(void* self);
	void (*destroy_)(void* self);
	void (*run)(void* self,int n);
	void (*print)(void* self);
	std::vector<float> (*evaluate)(void *self);
};

// 模板轉型別函數
template<class T>
constexpr AbsFuncList ClassFuncList{
	[](void*self)-> void*{return new T(*static_cast<T*>(self));},
	[](void*self)-> void {delete static_cast<T*>(self);},
	[](void*self,int n)-> void {(static_cast<T*>(self))->run(n);},
	[](void*self)-> void {(static_cast<T*>(self))->print();},
	[](void*self)-> std::vector<float> { return (static_cast<T*>(self))->evaluate();}
};


// 介面 
struct Interface{
	void* _classptr; 
	AbsFuncList const* funclist;
	//=========================================================
	// 載入物件名稱	
	template<class T>
	Interface(T const&t):
		_classptr(new T(t)),
		funclist(&ClassFuncList<T>)
	{}
	//==========================================================
	Interface(Interface const&rhs):
		_classptr(rhs.funclist->clone_(rhs._classptr)),
		funclist(rhs.funclist)
	{}
	~Interface(){
		funclist->destroy_(_classptr);
	}
	Interface& operator=(Interface const& rhs){
		_classptr = rhs.funclist->clone_(rhs._classptr);
		funclist = rhs.funclist;
		return *this;
	}
	//===========================================================
	// 呼叫該 T 物件的方法
	void run(int n){funclist->run(_classptr,n);}
	void print(){funclist->print(_classptr);}
	std::vector<float> evaluate(){return funclist->evaluate(_classptr);}




	
};


//======================================================================================================


class AddMachine{
	private:
		int val = 1;
	public:
		
		void run(int n){
			for(int i=0;i<n;i++){
				val +=1;
			}//endfor
			std::cout << val << std::endl;
		}//end_run
		
		void print(){
			std::cout << "this is add machine !!" << std::endl;
		}

		std::vector<float> evaluate(){
			return {1.2,2.3,4.5};
		}



};


class ProdMachine{
	private:
		int val = 1;
	public:
		
		void run(int n){
			for(int i=0;i<n;i++){
				val*=(i+1);
			}//endfor
			std::cout << val << std::endl;
		}//end_run
		
		void print(){
			std::cout << "this is prod machine !!" << std::endl;
		}

		std::vector<float> evaluate(){
			return {1.2,2.3,4.5};
		}




};


//====================================================================================================




int main(){

	std::vector<Interface> v;
	AddMachine a;
	ProdMachine b;

	v.push_back(a);
	v.push_back(b);

	for(int i=0;i<v.size();i++){
		v[i].run(i);
		v[i].print();
		std::vector<float> temp = v[i].evaluate();
		for(int i=0;i<temp.size();i++){
			std::cout << temp[i] << std::endl;
		}//endfor
	}//endfor
	


	return 0;
}//end_main