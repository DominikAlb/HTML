<?php

$doc = new DOMDocument('1.0');

$doc->formatOutput = true;

$root = $doc->createElement('list');
$root = $doc->appendChild($root);

$title = $doc->createElement('url');
$title = $root->appendChild($title);

$desc = $doc->createElement('description');
$desc = $root->appendChild($desc);

$text = $doc->createTextNode($_POST["url"]);
$text = $title->appendChild($text);

$textDesc = $doc->createTextNode("No description");
$textDesc = $desc->appendChild($textDesc);

$doc->save("links.xml");
?>