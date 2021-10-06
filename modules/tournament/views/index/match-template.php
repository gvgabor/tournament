<?php
/***
 * @var \yii\web\View $this
 */

?>

<div class="container-fluid" style="padding: 0">
    <div class="row align-items-start">
        <div class="alert alert-info m-0 text-center">
            <strong>Mérkőzés</strong>
        </div>
    </div>

    <div class="row align-items-center">
        <div class="col p-0">
            <div class="alert alert-danger m-0" style="overflow: hidden; height: 60px">
                <div class="text-center">
                    <h3 class="text-center" id="result-box"></h3>
                </div>
            </div>
        </div>
    </div>

    <div style="width: 100%; display: flex; justify-content: flex-start; justify-items: left; overflow: hidden;flex-direction: row ">
        <div class="match-item">
            <div style="width: 100%;">
                <h3 class="text-center">#=data.team1#</h3>
            </div>

        </div>
        <div style="width: 40px; min-width: 40px; max-width: 40px; background: black; color: white; padding-top: 30px">
            <h3 class="text-center" style="font-weight: bold">VS</h3>
        </div>
        <div class="match-item">
            <div style="width: 100%">
                <h3 class="text-center ">#=data.team2#</h3>
            </div>

        </div>
    </div>

    <div class="row align-items-center" style="overflow: hidden;">
        <div class="col p-0" style="overflow: hidden">
            <div style="width: 100%; height: 400px; background: white">
                <img
                        id="img"
                        src=""
                        alt=""
                        style="width: 100%; height: 100%; object-fit: cover">
            </div>
        </div>
    </div>

    <div class="row align-items-center mb-0">
        <div class="col p-0">
            <div class="alert alert-info m-0" style="overflow: hidden">
                <div class="float-start">
                    #=data.group# csoport - #=data.stadium#
                </div>
                <div class="float-end">
                    #=kendo.toString(data.date,"yyyy-MM-dd HH:mm")#
                </div>
            </div>
        </div>
    </div>

</div>


