<?php

namespace Drupal\react\PathProcessor;

use Drupal\Core\PathProcessor\InboundPathProcessorInterface;
use Symfony\Component\HttpFoundation\Request;

class SPAPathProcessor implements InboundPathProcessorInterface {

  /**
   * {@inheritDoc}
   *
   * Serve all "app/*" paths to the "app" route.
   */
  public function processInbound($path, Request $request) {
    if (strpos($path, '/app/') === 0) {
      $slug = preg_replace('|^\/app\/|', '', $path);
      $slug = str_replace('/', ':', $slug);
      return "/app/$slug";
    }

    return $path;
  }

}
