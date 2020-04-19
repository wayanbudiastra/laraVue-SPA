<?php

namespace App\Http\Controllers;

use App\Catagory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CatagoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $catagory = Catagory::orderBy('created_at','desc')->paginate();
        return response()->json($catagory,200);
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
        //

        $request->validate([
            'nama_catagory' => 'required|min:3',
            'image' => 'required|image|mimes:jpeg,png,jpg'
        ]);

        $catagory = new Catagory;
        $catagory->nama_catagory = $request->nama_catagory;
        $catagory->keterangan = $request->keterangan;

        $path = $request->file('image')->store('catagories_images');
        $catagory->image = $path;
        if ($catagory->save()){
            return response()->json($catagory, 200);
        }else{
            return response()->json([
                'message' => 'some error, please try again!',
              'status_code' => 500
            ], 500);
        }

    //    dd($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Catagory  $catagory
     * @return \Illuminate\Http\Response
     */
    public function show(Catagory $catagory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Catagory  $catagory
     * @return \Illuminate\Http\Response
     */
    public function edit(Catagory $catagory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Catagory  $catagory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Catagory $catagory)
    {
        //
         $request->validate([
            'nama_catagory' => 'required|min:3'
        ]);

        $catagory->nama_catagory = $request->nama_catagory;
        $catagory->keterangan = $request->keterangan;
        $oldPath = $request->image;
        if($request->hasFile('image')){
            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg'
            ]);
            $path = $request->file('image')->store('catagories_images');
            $catagory->image = $path;
            Storage::delete($oldPath);//hapus image lama
        }

        if($catagory->save()){
            return response()->json($catagory, 200);
        }else{
            Storage::delete($path);
            return response()->json([
                'message' => 'Some error occurred, Please ty agian!',
                'status_code' => 500
            ],500);
        }
      
        dd($request->all(), $catagory);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Catagory  $catagory
     * @return \Illuminate\Http\Response
     */
    public function destroy(Catagory $catagory)
    {
        //
       // dd($catagory);

       if ($catagory->delete()) {
           Storage::delete($catagory->image);
           return response()->json([
               'message' => 'Catagory deleted successfully!',
              'status_code' => 200],
               200
           );
       }else{
           return response()-json([
               'message' => 'some error, please try again!',
              'status_code' => 500],
            500);
       }
    }
}
