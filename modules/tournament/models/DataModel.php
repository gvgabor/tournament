<?php

namespace app\modules\tournament\models;

use Yii;
use yii\base\Model;

/***
 *
 *
 * @property-read string $groupMatchColumns
 * @property-read string $columns
 */
class DataModel extends Model
{

    public mixed $data;

    public function __construct($config = [])
    {
        $path = Yii::$app->basePath . "/modules/tournament/assets/json/data.json";
        $this->data = json_decode(file_get_contents($path), true);
        parent::__construct($config);
    }

    public function getColumns(): string
    {
        $columns[] = ["field" => "name", "title" => "Csapat"];
        $columns[] = [
            "field"      => "points",
            "title"      => "Pontok",
            "attributes" => ["style" => "text-align:center"],
            "width"      => 120,
        ];
        $columns[] = [
            "field"      => "goal",
            "title"      => "Lőtt gólok",
            "attributes" => ["style" => "text-align:center"],
            "width"      => 120,
        ];
        $columns[] = [
            "field"      => "rank",
            "title"      => "Rang",
            "attributes" => ["style" => "text-align:center"],
            "width"      => 70,
        ];
        return htmlspecialchars(json_encode($columns));
    }

    public function getGroupMatchColumns(): string
    {
        $columns[] = ["field" => "group", "title" => "Csoport", "hidden" => true];
        $columns[] = ["field" => "team1", "title" => "Csapat 1"];
        $columns[] = ["field" => "team2", "title" => "Csapat 2"];
//        $columns[] = ["field" => "stadium", "title" => "Stadion"];
        $columns[] = [
            "field"      => "date",
            "title"      => "Dátum",
            "attributes" => ["style" => "text-align:center"],
            "width"      => 170,
        ];
        $columns[] = [
            "field"      => "result",
            "title"      => "Eredmény",
            "attributes" => ["style" => "text-align:center"],
            "width"      => 120,
        ];

        return htmlspecialchars(json_encode($columns));
    }

}