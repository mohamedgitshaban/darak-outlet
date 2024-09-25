<?php

namespace App\Http\Controllers;

use App\Models\Vanities;
use Illuminate\Http\Request;

class VanitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Vanities=Vanities::select("id","name","coverimg","price","active","sub","discount","install")->get();
        return response()->json($Vanities);
    }
    public function installation()
    {
        $Vanities=Vanities::all();
        return response()->json($Vanities);
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
            'name'=>'required|string',
            'model'=>'required|string',
            'description'=>'required|string',
            'Type'=>'required|string',
            'OverallWidth'=>'required|numeric',
            'Finish'=>'required|string',
            'Sinks'=>'required|string',
            'SinkType'=>'required|string',
            'Features'=>'required|string',
            'OverallDepth'=>'required|numeric',
            'Shape'=>'required|string',
            'Size'=>'required|string',
            'OverallHeight'=>'required|numeric',
            'MirrorType'=>'required|string',
            'Style'=>'required|string',
            'TopMaterial'=>'required|string',
            'TopFinish'=>'required|string',
            'Doors'=>'required|numeric',
            'Drawers'=>'required|numeric',
            'VanityMaterial'=>'required|string',
            'SinkMaterial'=>'required|string',
            'SinkFinish'=>'required|string',
            'price'=>'required|numeric',
            'install'=>'required|string',
            'active'=>'required|numeric',
            'discount'=>'required|numeric',
            "numofstock"=>"required|numeric",

            'sub'=>'required|numeric',
            'coverimg'=>'required|string',
        ]);
        $Vanities = new Vanities();
        $Vanities->name = $validatedData['name'];
        $Vanities->model = $validatedData['model'];
        $Vanities->coverimg = $validatedData['coverimg'];
        $Vanities->description = $validatedData['description'];
        $Vanities->Type = $validatedData['Type'];
        $Vanities->Style = $validatedData['Style'];
        $Vanities->OverallHeight = $validatedData['OverallHeight'];
        $Vanities->Finish = $validatedData['Finish'];
        $Vanities->OverallWidth = $validatedData['OverallWidth'];
        $Vanities->Size = $validatedData['Size'];
        $Vanities->Sinks = $validatedData['Sinks'];
        $Vanities->Features = $validatedData['Features'];
        $Vanities->SinkType = $validatedData['SinkType'];
        $Vanities->OverallDepth = $validatedData['OverallDepth'];
        $Vanities->Shape = $validatedData['Shape'];
        $Vanities->TopMaterial = $validatedData['TopMaterial'];
        $Vanities->MirrorType = $validatedData['MirrorType'];
        $Vanities->TopFinish = $validatedData['TopFinish'];
        $Vanities->Doors = $validatedData['Doors'];
        $Vanities->Drawers = $validatedData['Drawers'];
        $Vanities->VanityMaterial = $validatedData['VanityMaterial'];
        $Vanities->SinkMaterial = $validatedData['SinkMaterial'];
        $Vanities->SinkFinish = $validatedData['SinkFinish'];
        $Vanities->price = $validatedData['price'];
        $Vanities->numofstock = $validatedData['numofstock'];
        $Vanities->sub = $validatedData['sub'];
        $Vanities->install = $validatedData['install'];
        $Vanities->discount = $validatedData['discount'];
        $Vanities->active = $validatedData['active'];
       
        $Vanities->save();
            return response()->json(["data"=>$request,$validatedData,"status"=>200]);
        }
        catch(e){
            return response()->json(["error"=>e,"status"=>404]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vanities  $vanities
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Vanities=Vanities::find($id)->get();
        return response()->json(data: $Vanities,status:200);
    }
    public function adminshow()
    {
        $Vanities=Vanities::all();
        return response()->json($Vanities);
    }

    public function update(Request $request, Vanities $vanities)
    {
        $request->validate([
            'name'=>'required|string',
            'model'=>'required|string',
            'description'=>'required|string',
            'Type'=>'required|string',
            'OverallWidth'=>'required|numeric',
            'Finish'=>'required|string',
            'Sinks'=>'required|string',
            'SinkType'=>'required|string',
            'Features'=>'required|string',
            'OverallDepth'=>'required|numeric',
            'Shape'=>'required|string',
            'Size'=>'required|string',
            'OverallHeight'=>'required|numeric',
            'MirrorType'=>'required|string',
            'Style'=>'required|string',
            'TopMaterial'=>'required|string',
            'TopFinish'=>'required|string',
            'Doors'=>'required|numeric',
            'Drawers'=>'required|numeric',
            'VanityMaterial'=>'required|string',
            'SinkMaterial'=>'required|string',
            'SinkFinish'=>'required|string',
            'price'=>'required|numeric',
            'install'=>'required|string',
            'active'=>'required|numeric',
            'discount'=>'required|numeric',
            'sub'=>'required|numeric',
            'coverimg'=>'required|string',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vanities  $vanities
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $vanities=Vanities::find($id);
      
        if ($vanities){
            $vanities->delete();

            return response()->json(['message' => 'Item deleted'], 200);
        }
        else{
            return response()->json(['message' => 'Item not found'], 404);   
        }
        return response()->json($data);
            
    }
}
