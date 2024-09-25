<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Active;
use Illuminate\Support\Facades\DB;
class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $User=Active::select("userid")->get();

            return response()->json($User);
        
    }
    public function info()
    {
        $User=User::select('id',
        'name',
        'email',
        'password',"phone","gender","age","nationality","address")->get();

            return response()->json($User);
        
    }

    public function addcart(Request $request)
    {
        // try{
        $validatedData = $request->validate([
            'userid'=>'required|numeric',
            'producttype'=>'required|numeric',
            'Productid'=>'required|numeric',
            'quantity'=>'required|numeric',
            
         ]);
        $Cart = new Cart();
        $Cart->userid = $validatedData['userid'];
        $Cart->producttype = $validatedData['producttype'];
        $Cart->Productid = $validatedData['Productid'];
        $Cart->quantity = $validatedData['quantity'];
        $Cart->save();
            // return response()->json(["data"=>$request,"status"=>200]);
        // }
        // catch(e){
            return response()->json(["error"=>$Cart,"status"=>404]);
        // }
    }
    public function cart($id)
    {
        $Cart1= DB::table('cart')
        ->join('accessories', 'cart.Productid', '=', 'accessories.id')
        ->where('cart.userid', '=' , $id)
        ->where('cart.producttype', '=' , 1)
        ->select('accessories.name' ,'accessories.price' ,'accessories.coverimg' , "quantity", "cart.id", "cart.Productid")
        ->get() ->toArray();
        $Cart2= DB::table('cart')
        ->join('faucets', 'cart.Productid', '=', 'faucets.id')
        ->where('cart.userid', '=' , $id)
        ->where('cart.producttype', '=' , 2)
        ->select('faucets.name' ,'faucets.price' ,'faucets.coverimg' , "quantity", "cart.id", "cart.Productid")
        ->get() ->toArray();
        $Cart3= DB::table('cart')
        ->join('mirrors', 'cart.Productid', '=', 'mirrors.id')
        ->where('cart.userid', '=' , $id)
        ->where('cart.producttype', '=' , 3)
        ->select('mirrors.name' ,'mirrors.price' ,'mirrors.coverimg' , "quantity", "cart.id", "cart.Productid")
        ->get() ->toArray();
        $Cart4= DB::table('cart')
        ->join('sinks', 'cart.Productid', '=', 'sinks.id')
        ->where('cart.userid', '=' , $id)
        ->where('cart.producttype', '=' , 4)
        ->select('sinks.name' ,'sinks.price' ,'sinks.coverimg' , "quantity", "cart.id", "cart.Productid")
        ->get() ->toArray();
        $Cart5= DB::table('cart')
        ->join('vanities', 'cart.Productid', '=', 'vanities.id')
        ->where('cart.userid', '=' , $id)
        ->where('cart.producttype', '=' ,5)
        ->select('vanities.name' ,'vanities.price' ,'vanities.coverimg' , "quantity", "cart.id", "cart.Productid")
        ->get() ->toArray();
        $Cart = array_merge($Cart1, $Cart2, $Cart3, $Cart4, $Cart5);

        return response()->json($Cart);
    }
    public function Price($id)
    {
        $Cart= DB::table('cart')
        ->join('accessories', 'cart.Productid', '=', 'accessories.id')
        ->where('cart.userid', '=' , $id)
        ->select(DB::raw('SUM(accessories.price * cart.quantity) as total'))
        ->get();
        return response()->json($Cart);
    }
 
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // try{
        //     $validatedData = $request->validate([
        //     'userid'=>'required|numeric',
        //     'producttype'=>'required|numeric',
        //     'Productid'=>'required|numeric',
        //     'quantity'=>'required|numeric',
        //     ]);
            // $Accessories = new Accessories();
            // $Accessories->name = $validatedData['name'];
            // $Accessories->model = $validatedData['model'];
            // $Accessories->coverimg = $validatedData['coverimg'];
            // $Accessories->description = $validatedData['description'];
            // $Accessories->Type = $validatedData['Type'];
            // $Accessories->Style = $validatedData['Style'];
            // $Accessories->Material = $validatedData['Material'];
            // $Accessories->Shape = $validatedData['Shape'];
            // $Accessories->price = $validatedData['price'];
            // $Accessories->numofstock = $validatedData['numofstock'];
            // $Accessories->sub = $validatedData['sub'];
            // $Accessories->install = $validatedData['install'];
            // $Accessories->discount = $validatedData['discount'];
            // $Accessories->active = $validatedData['active'];
            // $Accessories->Color = $validatedData['Color'];
            // $Accessories->save();
            return response()->json(["data"=>$request,"status"=>200]);
        // }
        // catch(e){
        //     return response()->json(["error"=>e,"status"=>404]);
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email'=>'required|string',
            'password'=>'required|string',
         ]);
         $log=User::select("id")->where("email", "=",$validatedData['email'])
                    ->where("password", "=",$validatedData['password'])
                    ->get();
         
            return  response()->json(["data"=>$log]);
        //  }
        // return response()->json(["data"=>"no"]);

    }
    public function signup(Cart $cart)
    {
        $validatedData = $request->validate([
            'userid'=>'required|numeric',
            'producttype'=>'required|numeric',
            'Productid'=>'required|numeric',
            'quantity'=>'required|numeric',
            
         ]);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }


    public function destroy($id)
   {
       $Cart=Cart::find($id);
     
       if ($Cart){
           $Cart->delete();

           return response()->json(['message' => 'Item deleted'], 200);
       }
       else{
           return response()->json(['message' => 'Item not found'], 404);   
       }
           
   }
}
