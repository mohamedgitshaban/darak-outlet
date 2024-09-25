<?php

namespace App\Http\Controllers;

use App\Models\Faucets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FaucetsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Faucets=Faucets::select("id","name","coverimg","price","active","sub","discount","install")->get();
        return response()->json($Faucets);
    }
    public function store(Request $request)
    { 
         try{
        $validatedData = $request->validate([
            "name"=>"required|string",
                'model' => 'required|string',
                'coverimg' => 'required|string',
                "description"=>"required|string",
            "Type"=>"required|string",
            "Style"=>"required|string",
            "FaucetHoles"=>"required|numeric",
            "Finish"=>"required|string",
            "Handles"=>"required|numeric",
            "HandleStyle"=>"required|string",
            "SpoutReach"=>"required|numeric",
            "SpoutHeight"=>"required|numeric",
            "OverallHeight"=>"required|numeric",
            "Certifications"=>"required|string",
            "price"=>"required|numeric",
            "numofstock"=>"required|numeric",
            "active"=>"required|numeric",
            "sub"=>"required|numeric",
            "install"=>"required|string",
            "discount"=>"required|numeric",
        ]);
        $Faucets = new Faucets();
        $Faucets->name = $validatedData['name'];
        $Faucets->model = $validatedData['model'];
        $Faucets->coverimg = $validatedData['coverimg'];
        $Faucets->description = $validatedData['description'];
        $Faucets->Type = $validatedData['Type'];
        $Faucets->Style = $validatedData['Style'];
        $Faucets->FaucetHoles = $validatedData['FaucetHoles'];
        $Faucets->Finish = $validatedData['Finish'];
        $Faucets->Handles = $validatedData['Handles'];
        $Faucets->HandleStyle = $validatedData['HandleStyle'];
        $Faucets->SpoutReach = $validatedData['SpoutReach'];
        $Faucets->SpoutHeight = $validatedData['SpoutHeight'];
        $Faucets->OverallHeight = $validatedData['OverallHeight'];
        $Faucets->Certifications = $validatedData['Certifications'];
        $Faucets->price = $validatedData['price'];
        $Faucets->numofstock = $validatedData['numofstock'];
        $Faucets->sub = $validatedData['sub'];
        $Faucets->install = $validatedData['install'];
        $Faucets->discount = $validatedData['discount'];
        $Faucets->active = $validatedData['active'];
       
        $Faucets->save();
            return response()->json(["data"=>$request,$validatedData,"status"=>200]);
        }
        catch(e){
            return response()->json(["error"=>"no","status"=>404]);
        }
    }
    public function installation()
    {
        $Faucets=Faucets::select("id","name","coverimg","Color","price","active","sub","discount","install")->get();
        return response()->json($Faucets);
    }
    public function adminshow()
    {
        $Faucets=Faucets::all();
        return response()->json($Faucets);
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


    public function show($id)
    {
        $Faucets=Faucets::find($id)->get();
        return response()->json(data: $Faucets,status:200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Faucets  $faucets
     * @return \Illuminate\Http\Response
     */
    public function edit(Faucets $faucets)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Faucets  $faucets
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Faucets $faucets)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Faucets  $faucets
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Faucets=Faucets::find($id);
      
        if ($Faucets){
            $Faucets->delete();

            return response()->json(['message' => 'Item deleted'], 200);
        }
        else{
            return response()->json(['message' => 'Item not found'], 404);   
        }
        return response()->json($data);
            
    }
}
