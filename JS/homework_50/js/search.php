<?php

    
    if ($_GET['query'] == "Рубашка") {
        
    $result = array(
                    array(
                        "text" => "Рубашка",
                        "href" => "https://kg.wildberries.ru/catalog/5315031/otzyvy"
                    ),
                    array(
                        "text" => "Рубашка черная",
                        "href" => "https://kg.wildberries.ru/catalog/8572151/detail.aspx?targetUrl=XS"
                    ),
                    array(
                        "text" => "Рубашка фиолетовая",
                        "href" => "https://kg.wildberries.ru/catalog/8920388/detail.aspx?targetUrl=XS"
                    )
        );

    } else if ($_GET['query'] == "Кофта") {

        $result = array(
                    array(
                        "text" => "Кофта",
                        "href" => "https://kg.wildberries.ru/catalog/18681408/detail.aspx?targetUrl=XS"
                    ),
                    array(
                        "text" => "Кофта черная",
                        "href" => "https://kg.wildberries.ru/catalog/18681411/detail.aspx?targetUrl=XS"
                    ),
                    array(
                        "text" => "Кофта зеленая",
                        "href" => "https://kg.wildberries.ru/catalog/15073782/detail.aspx?targetUrl=XS"
                    )
        );

    } else if ($_GET['query'] == "Платье") {

        $result = array(
                    array(
                        "text" => "Платье",
                        "href" => "https://kg.wildberries.ru/catalog/16916400/detail.aspx"
                    ),
                    array(
                        "text" => "Платье черное",
                        "href" => "https://kg.wildberries.ru/catalog/3985474/detail.aspx"
                    ),
                    array(
                        "text" => "Платье зеленое",
                        "href" => "https://kg.wildberries.ru/catalog/28099665/detail.aspx"
                    )
        );

    } else {

        $result = "Ничего не найдено!";

    }

    echo json_encode($result);

?>