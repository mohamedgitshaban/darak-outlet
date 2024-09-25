<?php

namespace App\Http\Controllers;

use App\Models\Mirrors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MirrorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Mirrors=Mirrors::select("id","name","coverimg","Color","price","active","sub","discount","install")->get();
        return response()->json($Mirrors);
    }
    public function installation()
    {
        $Mirrors=Mirrors::all();
        return response()->json($Mirrors);
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
    {try{
        $validatedData = $request->validate([
            "name"=>"required|string",
            "model"=>"required|string",
            "coverimg"=>"required|string",
            "description"=>"required|string",
            "Type"=>"required|string",
            "Color"=>"required|string",
            "Style"=>"required|string",
            "ExtensionLength"=>"required|numeric",
            "Width"=>"required|numeric",
            "Height"=>"required|numeric",
            "Specification"=>"required|string",
            "Magnification"=>"required|numeric",
            "Features"=>"required|string",
            "MirrorOrientation"=>"required|string",
            "Material"=>"required|string",
            "Shape"=>"required|string",
            "MirrorLightType"=>"required|numeric",
            "price"=>"required|numeric",
            "numofstock"=>"required|numeric",
            "active"=>"required|numeric",
            "sub"=>"required|numeric",
            "install"=>"required|string",
            "discount"=>"required|numeric",
        ]);
        $Mirrors = new Mirrors();
        $Mirrors->name = $validatedData['name'];
        $Mirrors->model = $validatedData['model'];
        $Mirrors->coverimg = $validatedData['coverimg'];
        $Mirrors->description = $validatedData['description'];
        $Mirrors->Type = $validatedData['Type'];
        $Mirrors->Style = $validatedData['Style'];
        $Mirrors->ExtensionLength = $validatedData['ExtensionLength'];
        $Mirrors->Width = $validatedData['Width'];
        $Mirrors->Height = $validatedData['Height'];
        $Mirrors->Specification = $validatedData['Specification'];
        $Mirrors->Magnification = $validatedData['Magnification'];
        $Mirrors->Features = $validatedData['Features'];
        $Mirrors->MirrorOrientation = $validatedData['MirrorOrientation'];
        $Mirrors->Material = $validatedData['Material'];
        $Mirrors->Shape = $validatedData['Shape'];
        $Mirrors->MirrorLightType = $validatedData['MirrorLightType'];
        $Mirrors->price = $validatedData['price'];
        $Mirrors->numofstock = $validatedData['numofstock'];
        $Mirrors->sub = $validatedData['sub'];
        $Mirrors->install = $validatedData['install'];
        $Mirrors->discount = $validatedData['discount'];
        $Mirrors->active = $validatedData['active'];
        $Mirrors->Color = $validatedData['Color'];
       
        $Mirrors->save();
            return response()->json(["data"=>$request,$validatedData,"status"=>200]);
        }
        catch(e){
            return response()->json(["error"=>e,"status"=>404]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Mirrors  $mirrors
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Mirrors=Mirrors::find($id)->get();
        return response()->json(data: $Mirrors,status:200);
    }
    public function adminshow()
    {
        $Mirrors=Mirrors::all();
        return response()->json($Mirrors);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Mirrors  $mirrors
     * @return \Illuminate\Http\Response
     */
    public function edit(Mirrors $mirrors)
    {
        
    }


    public function update(Request $request, Mirrors $mirrors)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Mirrors  $mirrors
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Mirrors=Mirrors::find($id);
      
        if ($Mirrors){
            $Mirrors->delete();

            return response()->json(['message' => 'Item deleted'], 200);
        }
        else{
            return response()->json(['message' => 'Item not found'], 404);   
        }
        return response()->json($data);
            
    }
}
