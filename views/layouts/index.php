<?php
/***
 * @var \yii\web\View $this
 * @var string $content
 */

use app\assets\AppAsset;

?>

<?PHP
AppAsset::register($this);
?>

<?PHP $this->beginPage() ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Referenciák</title>
        <?PHP $this->head() ?>
        <script type="text/javascript">
            kendo.culture("hu-HU")
        </script>
    </head>
    <body>
        <?PHP $this->beginBody() ?>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Referenciák</a>
                <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="<?= Yii::$app->urlManager->baseUrl ?>">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                    class="nav-link"
                                    aria-current="page"
                                    href="<?= Yii::$app->urlManager->createUrl(['tournament/index']) ?>"
                            >Europa bajnokság
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <?= $content ?>

        <?PHP $this->endBody() ?>
    </body>

</html>

<?PHP $this->endPage() ?>
