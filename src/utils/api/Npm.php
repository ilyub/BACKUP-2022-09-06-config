<?php

class Npm
{
  /**
   * Runs "build" script.
   */
  public static function build(Package $package): void
  {
    if ($package->hasScript('build')) {
      Sys::execute('npm run build', 'Building');
    }
  }

  /**
   * Runs "build-doc" script.
   */
  public static function buildDoc(Package $package): void
  {
    if ($package->hasScript('build-doc')) {
      Sys::execute('npm run build-doc', 'Building documentation');
    }
  }

  /**
   * Runs "build-es" script.
   */
  public static function buildEs(Package $package): void
  {
    if ($package->hasScript('build-es')) {
      Sys::execute('npm run build-es', 'Building es version');
    }
  }

  /**
   * Runs "commitlint" script.
   */
  public static function commitlint(Package $package): void
  {
    if ($package->hasScript('commitlint-all')) {
      Sys::execute('npm run commitlint-all', 'Linting with commitlint');
    }
  }

  /**
   * Runs "config-lint" script.
   */
  public static function configLint(Package $package): void
  {
    if ($package->hasScript('config-lint')) {
      Sys::execute('npm run config-lint', 'Linting with config-lint');
    }
  }

  /**
   * Retrieves npm package versions.
   */
  public static function getVersions(Package $package): array
  {
    $name = $package->name;

    $versions = Sys::execute('npm view '.$name.' versions --json', 'Retrieving npm versions');
    $versions = implode("\n", $versions);
    $versions = Util::decodeJson($versions, 'versions');

    return is_array($versions) ? $versions : [$versions];
  }

  /**
   * Runs "lint" script.
   */
  public static function lint(Package $package): void
  {
    if ($package->hasScript('lint-no-fix')) {
      Sys::execute('npm run lint-no-fix', 'Linting with eslint');
    }
  }

  /**
   * No deprecated.
   */
  public static function noDeprecated(Package $package): void
  {
    if (preg_match('`^\d+\.0\.0$`isuxDX', $package->version)) {
      foreach (Sys::scanDirDeep('src') as $path) {
        if (is_file($path)) {
          $contents = file_get_contents($path);
          if (preg_match('`\*\s+@deprecated`isuxDX', $contents)) {
            throw new BaseException('No deprecated');
          }
        }
      }
    }
  }

  /**
   * Asserts no vulnerabilities.
   */
  public static function noVulnerabilities(Package $package): void
  {
    if ($package->hasScript('audit')) {
      $audit = Sys::execute('npm run audit --json', 'Checking for vulnerablilties');
      $audit = implode("\n", $audit);
      $audit = Util::decodeJson($audit, 'audit');

      if ($audit['vulnerabilities']) {
        throw new BaseException('No vulnerabilities');
      }
    }
  }

  /**
   * Runs "package-json-lint" script.
   */
  public static function packageJsonLint(Package $package): void
  {
    if ($package->hasScript('package-json-lint')) {
      Sys::execute('npm run package-json-lint', 'Linting with package-json-lint');
    }
  }

  /**
   * Runs php-cs-fixer.
   */
  public static function phpCsFixer(Package $package): void
  {
    if ($package->hasScript('php-cs-fixer')) {
      Sys::execute('npm run php-cs-fixer', 'Linting with php-cs-fixer');
    }
  }

  /**
   * Runs "publish" script.
   */
  public static function publish(Package $package): void
  {
    if ($package->hasScript('publish')) {
      Sys::execute('npm run publish', 'Publishing npm package');
    }
  }

  /**
   * Regenerates lock file.
   */
  public static function regenerateLockFile(Package $package): void
  {
    if ($package->hasScript('regenerate-lock-file')) {
      Sys::execute('npm run regenerate-lock-file', 'Regenerating lock file');
    }
  }

  /**
   * Runs "stylelint" script.
   */
  public static function stylelint(Package $package): void
  {
    if ($package->hasScript('stylelint-no-fix')) {
      Sys::execute('npm run stylelint-no-fix', 'Linting with stylelint');
    }
  }

  /**
   * Runs "stylelint-html" script.
   */
  public static function stylelintHtml(Package $package): void
  {
    if ($package->hasScript('stylelint-html-no-fix')) {
      Sys::execute('npm run stylelint-html-no-fix', 'Linting with stylelint (html)');
    }
  }

  /**
   * Runs "test" script.
   */
  public static function test(Package $package): void
  {
    if ($package->hasScript('test')) {
      Sys::execute('npm run test', 'Testing');

      if (file_exists('lcov-report/index.html')) {
        $coverage = file_get_contents('lcov-report/index.html');

        preg_match_all('`(\\d+)/(\\d+)`isuxDX', $coverage, $matches, PREG_SET_ORDER);

        foreach ($matches as $match) {
          if ($match[1] !== $match[2]) {
            throw new BaseException('Incomplete coverage');
          }
        }
      }
    }
  }

  /**
   * Runs "tsc" script.
   */
  public static function tsc(Package $package): void
  {
    if ($package->hasScript('tsc')) {
      Sys::execute('npm run tsc', 'Linting with tsc');
    }
  }

  /**
   * Runs "vue-tsc" script.
   */
  public static function vueTsc(Package $package): void
  {
    if ($package->hasScript('vue-tsc')) {
      Sys::execute('npm run vue-tsc', 'Linting with vue-tsc');
    }
  }
}
