<?php

namespace Drupal\react\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Provides controllers for spa related HTTP requests.
 */
class SPAController extends ControllerBase {

  /**
   * Default spa route.
   */
  public function spa() {
    return array(
      '#markup' => 'SPA content. If you are seeing this, something probably went wrong.',
    );
  }
}
