<?php

include_once 'src/php-cs-config.php';

$finder = PhpCsFixer\Finder::create()->in(['src']);

$config = new PhpCsFixer\Config();

return $config
  ->setFinder($finder)
  ->setIndent('  ')
  ->setLineEnding("\n")
  ->setRules(PhpCsConfig::$rules)
;
