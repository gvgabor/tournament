<?php

namespace app\modules\tournament\controllers;

use yii\web\Controller;

class IndexController extends Controller
{

    public function actionIndex()
    {
        return $this->render("index");

    }

}