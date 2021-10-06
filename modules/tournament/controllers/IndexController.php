<?php

namespace app\modules\tournament\controllers;

use app\modules\tournament\models\DataModel;
use JetBrains\PhpStorm\ArrayShape;
use Yii;
use yii\web\Controller;
use yii\web\Response;

class IndexController extends Controller
{

    public $enableCsrfValidation = false;

    public function actionIndex()
    {
        return $this->render("index");

    }

    public function actionMatchTemplate()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $result["content"] = $this->renderPartial("match-template");
        return $result;
    }

    public function actionPlayMatch()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $data = $this->request->post("data");
        $data = json_decode($data, true);

        $model = new DataModel();
        $index1 = array_search($data["team1"], array_column($model->data["teams"], "name"));
        $index2 = array_search($data["team2"], array_column($model->data["teams"], "name"));

        $rank1 = 200 - ($model->data["teams"][$index1]["rank"] * 2);
        $rank2 = 200 - ($model->data["teams"][$index2]["rank"] * 2);

        $hit1 = 0;
        $hit2 = 0;

        for ($i = 1; $i <= $rank1; $i++) {
            $hit = mt_rand(1, 101) - 100;
            if ($hit > 0) $hit1++;
        }
        for ($i = 1; $i <= $rank2; $i++) {
            $hit = mt_rand(1, 101) - 100;
            if ($hit > 0) $hit2++;
        }

        $result["goal1"] = $hit1;
        $result["goal2"] = $hit2;
        $result["result"] = $result["goal1"] . "-" . $result["goal2"];
        return $result;
    }


    public function actionGroupDataSource()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $result = ["total" => 0, "data" => []];
        $request = Yii::$app->request;
        $group = $request->post("group");
        $model = new DataModel();
        $codeList = file_get_contents(Yii::$app->basePath . "/modules/tournament/assets/json/country-code.json");
        $codeList = json_decode($codeList, true);

        foreach ($model->data["groups"][$group] as $value) {

            $codeIndex = array_search($value, array_column($codeList, "country"));
            $flag = null;
            if ($codeIndex !== false) {
                $flag = $codeList[$codeIndex]["flag"];
            }

            if ($value == "Wales") {
                $flag = "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg";
            }
            if ($value == "England") {
                $flag = "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/64px-Flag_of_England.svg.png";
            }
            if ($value == "Scotland") {
                $flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/64px-Flag_of_Scotland.svg.png";
            }

            $index = array_search($value, array_column($model->data["teams"], "name"));

            $dataItem = [
                "name"   => $value,
                "points" => 0,
                "goal"   => 0,
                "code"   => "AL",
                "flag"   => $flag,
                "rank"   => $model->data["teams"][$index]["rank"]
            ];
            $result["data"][] = $dataItem;
        }

        $result["total"] = count($result["data"]);

        return $result;
    }


    public function actionGroupMatchDataSource()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $result = ["total" => 0, "data" => []];
        $model = new DataModel();
        foreach ($model->data["matches"] as $key => $value) {
            foreach ($value as $item) {
                $dataItem = [
                    "group"   => $key,
                    "team1"   => $item["team1"],
                    "team2"   => $item["team2"],
                    "stadium" => $item["stadium"],
                    "image"   => $item["image"],
                    "date"    => $item["date"],
                    "result"  => null,
                ];
                $result["data"][] = $dataItem;
            }
        }

        $result["total"] = count($result["data"]);

        return $result;
    }

}