<?php

namespace App\Http\Controllers;

use App\Models\sink;
use Illuminate\Http\Request;

class SinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sink=Sink::select("id","name","coverimg","Color","price","active","sub","discount","install")->get();
        return response()->json(data: $sink,status:200);
    }
    public function installation()
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
    {try{
        $validatedData = $request->validate([
            "name"=>"required|string",
            "model"=>"required|string",
            "coverimg"=>"required|string",
            "description"=>"required|string",
            "Type"=>"required|string",
            "Color"=>"required|string",
            "Style"=>"required|string",
            "OverallHeight"=>"required|numeric",
            "OverallLength"=>"required|numeric",
            "OverallWidth"=>"required|numeric",
            "Features"=>"required|string",
            "Size"=>"required|string",
            "FaucetHoles"=>"required|numeric",
            "Shape"=>"required|string",
            "BasinDepth"=>"required|numeric",
            "BasinWidth"=>"required|numeric",
            "BasinLength"=>"required|numeric",
            "Material"=>"required|string",
            "Certifications"=>"required|string",
            "price"=>"required|numeric",
            "numofstock"=>"required|numeric",
            "active"=>"required|numeric",
            "sub"=>"required|numeric",
            "install"=>"required|string",
            "discount"=>"required|numeric",
        ]);
        $sink = new Sink();
        $sink->name = $validatedData['name'];
        $sink->model = $validatedData['model'];
        $sink->coverimg = $validatedData['coverimg'];
        $sink->description = $validatedData['description'];
        $sink->Type = $validatedData['Type'];
        $sink->Style = $validatedData['Style'];
        $sink->OverallHeight = $validatedData['OverallHeight'];
        $sink->OverallLength = $validatedData['OverallLength'];
        $sink->OverallWidth = $validatedData['OverallWidth'];
        $sink->Size = $validatedData['Size'];
        $sink->Shape = $validatedData['Shape'];
        $sink->FaucetHoles = $validatedData['FaucetHoles'];
        $sink->Features = $validatedData['Features'];
        $sink->BasinDepth = $validatedData['BasinDepth'];
        $sink->BasinWidth = $validatedData['BasinWidth'];
        $sink->BasinLength = $validatedData['BasinLength'];
        $sink->Material = $validatedData['Material'];
        $sink->Certifications = $validatedData['Certifications'];
        $sink->price = $validatedData['price'];
        $sink->numofstock = $validatedData['numofstock'];
        $sink->sub = $validatedData['sub'];
        $sink->install = $validatedData['install'];
        $sink->discount = $validatedData['discount'];
        $sink->active = $validatedData['active'];
        $sink->Color = $validatedData['Color'];
       
        $sink->save();
            return response()->json(["data"=>$request,$validatedData,"status"=>200]);
        }
        catch(e){
            return response()->json(["error"=>e,"status"=>404]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\sink  $sink
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sink=Sink::find($id)->get();
        return response()->json(data: $sink,status:200);
    }
    public function adminshow()
    {
        $sink=Sink::all();
        return response()->json($sink);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\sink  $sink
     * @return \Illuminate\Http\Response
     */
    public function edit(sink $sink)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\sink  $sink
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, sink $sink)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\sink  $sink
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sink=Sink::find($id);
      
        if ($sink){
            $sink->delete();

            return response()->json(['message' => 'Item deleted'], 200);
        }
        else{
            return response()->json(['message' => 'Item not found'], 404);   
        }
        return response()->json($data);
            
    }
}
