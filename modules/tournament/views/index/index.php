<?php
/***
 * @var View $this
 */

use app\modules\tournament\models\DataModel;
use yii\helpers\Html;
use yii\web\View;

//$js = [
//    "/modules/rendes/assets/js/class.knockout.js",
//    "/modules/rendes/assets/js/class.tournament.js",
//];
//
//foreach ($js as $value) {
//    $publish = Yii::$app->assetManager->publish(Yii::$app->basePath . $value);
//    $this->registerJsFile($publish[1], ["position" => View::POS_END]);
//}

$model = new DataModel();

$durationOptions = [
    200 => "Gyors",
    2000 => "Normál",
    5000 => "Lassú",
];

?>

<script type="module">
    const instance = new ClassTournament();
    instance.init();
</script>

<div class="container-fluid mt-2">

    <div class="row align-items-start">
        <div class="col" style="max-width: 600px">
            <div class="card shadow">
                <div class="card-header">
                    <h5 class="card-title">Csoportok</h5>
                </div>
                <div class="card-body">
                    <div id="group-tabs">
                        <ul>
                            <?PHP foreach ($model->data["groups"] as $key => $value): ?>
                                <li data-group="<?= $key ?>"><?= $key ?> csoport</li>
                            <?PHP endforeach; ?>
                        </ul>
                        <?PHP foreach ($model->data["groups"] as $key => $value): ?>
                            <div style="padding: 0">
                                <div
                                    data-group="<?= $key ?>"
                                    data-columns="<?= $model->columns ?>"
                                    class="group-grid"></div>
                            </div>
                        <?PHP endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card shadow">
                <div class="card-header">
                    <h5 class="card-title">Csoport mérkőzések</h5>
                </div>
                <div class="card-body pt-2">

                    <div class="row">
                        <div id="match-container" class="col" style="max-width: 620px; display: none">
                        </div>
                        <div class="col">
                            <div data-columns="<?= $model->groupMatchColumns ?>" id="group-match-grid"></div>
                        </div>
                    </div>

                </div>
                <div class="card-footer">
                    <div class="d-flex flex-row-reverse">
                        <button id="start-group-match-btn" class="k-button">
                            <span class="k-icon k-i-media-manager"></span>&nbsp;Europa bajnokság indítása
                        </button>
                        <div style="margin-right: 20px">
                            <div style="display: flex">
                                Mérközések sebessége:&nbsp; <?= Html::radioList("duration", 200, $durationOptions) ?>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row align-items-start mt-2">

    </div>

</div>
