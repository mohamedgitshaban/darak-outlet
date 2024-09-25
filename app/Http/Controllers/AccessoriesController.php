<?php

namespace App\Http\Controllers;

use App\Models\Accessories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AccessoriesController extends Controller
{

    public function index()
    {
        $Accessories=Accessories::select("id","name","coverimg","Color","price","active","sub","discount","install")->get();
        return response()->json($Accessories);
    }
    public function adminshow()
    {
        $Accessories=Accessories::all();
        return response()->json($Accessories);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    
    public function store(Request $request)
    {
        try{
            $validatedData = $request->validate([
                "name"=>"required|string",
                'model' => 'required|string',
                'coverimg' => 'required|string',
                "description"=>"required|string",
                "Type"=>"required|string",
                "Color"=>"required|string",
                "Style"=>"required|string",
                "Material"=>"required|string",
                "Shape"=>"required|string",
                "price"=>"required|numeric",
                "numofstock"=>"required|numeric",
                "active"=>"required|numeric",
                "sub"=>"required|numeric",
                "install"=>"required|string",
                "discount"=>"required|numeric",
            ]);
            $Accessories = new Accessories();
            $Accessories->name = $validatedData['name'];
            $Accessories->model = $validatedData['model'];
            $Accessories->coverimg = $validatedData['coverimg'];
            $Accessories->description = $validatedData['description'];
            $Accessories->Type = $validatedData['Type'];
            $Accessories->Style = $validatedData['Style'];
            $Accessories->Material = $validatedData['Material'];
            $Accessories->Shape = $validatedData['Shape'];
            $Accessories->price = $validatedData['price'];
            $Accessories->numofstock = $validatedData['numofstock'];
            $Accessories->sub = $validatedData['sub'];
            $Accessories->install = $validatedData['install'];
            $Accessories->discount = $validatedData['discount'];
            $Accessories->active = $validatedData['active'];
            $Accessories->Color = $validatedData['Color'];
            // if ($request->hasFile('coverimg')) {
            //     $fileName = time() . '.' . $request->image->extension();
            //     $request->image->storeAs('public/image', $fileName);
            //     $Accessories->image = $fileName;

            // }
            // if ($request->hasFile('model')) {
            //     $model = $request->file('model');
            //     $path = $model->store('public/model');
            //     $Accessories->model = $path;
            // }
            $Accessories->save();
            return response()->json(["data"=>$request,$validatedData,"status"=>200]);
        }
        catch(e){
            return response()->json(["error"=>e,"status"=>404]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Accessories  $accessories
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Accessories=Accessories::find($id)->get();
            if(!empty($Accessories)){
            
                return response()->json($Accessories);
            }
            else{
               return response()->json([
                    "messege"=>"accessorie not found"
                ],404);
            }

        }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Accessories  $accessories
     * @return \Illuminate\Http\Response
     */
    public function edit(Accessories $accessories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Accessories  $accessories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Accessories $accessories)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Accessories  $accessories
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Accessories=Accessories::find($id);
      
        if ($Accessories){
            $Accessories->delete();

            return response()->json(['message' => 'Item deleted'], 200);
        }
        else{
            return response()->json(['message' => 'Item not found'], 404);   
        }
        return response()->json($data);
            
    }
}
