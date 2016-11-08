<?php
/**
 * @file
 * Contains \Drupal\react\Theme\SPAThemeNegotiator.
 */

namespace Drupal\react\Theme;

use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Theme\ThemeNegotiatorInterface;

class SPAThemeNegotiator implements ThemeNegotiatorInterface {

  static $applies = array(
    'react.app.home',
    'react.app.all',
  );

  public function applies(RouteMatchInterface $route_match) {
    return !empty($route_match) && in_array($route_match->getRouteName(), static::$applies);
  }

  /**
   * {@inheritdoc}
   */
  public function determineActiveTheme(RouteMatchInterface $route_match) {
    return 'spa';
  }
}
