<?php
# @Author: Nicolas Fazio <webmaster-fazio>
# @Date:   15-09-2017
# @Email:  contact@nicolasfazio.ch
# @Last modified by:   webmaster-fazio
# @Last modified time: 19-09-2017

/**
* Add REST API support to an already registered post type
* http://v2.wp-api.org/extending/custom-content-types/
* Access this post type at yoursite.com/wp-json/wp/v2/post_type_name
*/


add_action( 'init', 'appp_post_type_rest_support', 999 );

function appp_post_type_rest_support() {

  global $wp_post_types;

  //be sure to set this to the name of your post type!
  $post_type_name = 'workshop';
  if( isset( $wp_post_types[ $post_type_name ] ) ) {
    $wp_post_types[$post_type_name]->show_in_rest = true;
    $wp_post_types[$post_type_name]->rest_base = $post_type_name;
    $wp_post_types[$post_type_name]->rest_controller_class = 'WP_REST_Posts_Controller';
  }
  $post_type_name = 'formation';
  if( isset( $wp_post_types[ $post_type_name ] ) ) {
    $wp_post_types[$post_type_name]->show_in_rest = true;
    $wp_post_types[$post_type_name]->rest_base = $post_type_name;
    $wp_post_types[$post_type_name]->rest_controller_class = 'WP_REST_Posts_Controller';
  }
}

add_action( 'rest_api_init', 'appp_register_post_meta' );
function appp_register_post_meta() {
    register_rest_field( 'formation', // any post type registered with API
        'formation_position', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'formation', // any post type registered with API
        'content_block_formation_1', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'formation', // any post type registered with API
        'content_block_formation_2', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'formation', // any post type registered with API
        'content_block_formation_3', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'formation', // any post type registered with API
        'content_block_formation_4', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'formation', // any post type registered with API
        'formation_position', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );

    register_rest_field( 'formation', // any post type registered with API
        'date_formation_du', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'formation', // any post type registered with API
        'date_formation_au', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'formation', // any post type registered with API
        't_formation_b1', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'formation', // any post type registered with API
        'formation_priorite', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'formation', // any post type registered with API
        'wp_custom_attachment', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'formation', // any post type registered with API
        'formation_dates', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );

    // workshop fields
    register_rest_field( 'workshop', // any post type registered with API
        'wk_position', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'workshop', // any post type registered with API
        'priorite', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'workshop', // any post type registered with API
        'complet', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'workshop', // any post type registered with API
        'date_session_1_du', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'workshop', // any post type registered with API
        'date_session_1_au', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'workshop', // any post type registered with API
        'desc_resume_workshop', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    // register_rest_field( 'workshop', // any post type registered with API
    //     'parcours', // this needs to match meta key
    //     array(
    //         'get_callback'    => 'appp_get_meta',
    //         'update_callback' => null,
    //         'schema'          => null,
    //     )
    // );
    register_rest_field( 'workshop', // any post type registered with API
        'ecolage_wk', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'workshop', // any post type registered with API
        'programme_workshop', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
    register_rest_field( 'workshop', // any post type registered with API
        'titre_workshop_cour', // this needs to match meta key
        array(
            'get_callback'    => 'appp_get_meta',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function appp_get_meta( $object, $field_name, $request ) {
    return get_post_meta( $object[ 'id' ], $field_name, true );
}
function my_add_meta_vars ($current_vars) {
    $current_vars = array_merge ($current_vars, array ('meta_key', 'meta_value'));
    return $current_vars;
}
add_action( 'init', 'my_custom_taxonomy_rest_support', 25 );

function my_custom_taxonomy_rest_support() {
  global $wp_taxonomies;

  //TODO: be sure to set this to the name of your taxonomy!
  $taxonomy_name = 'cursus';

  if ( isset( $wp_taxonomies[ $taxonomy_name ] ) ) {
    $wp_taxonomies[ $taxonomy_name ]->show_in_rest = true;

    // Optionally customize the rest_base or controller class
    $wp_taxonomies[ $taxonomy_name ]->rest_base = $taxonomy_name;
    $wp_taxonomies[ $taxonomy_name ]->rest_controller_class = 'WP_REST_Terms_Controller';
  }
  $taxonomy_name = 'parcours';

  if ( isset( $wp_taxonomies[ $taxonomy_name ] ) ) {
    $wp_taxonomies[ $taxonomy_name ]->show_in_rest = true;

    // Optionally customize the rest_base or controller class
    $wp_taxonomies[ $taxonomy_name ]->rest_base = $taxonomy_name;
    $wp_taxonomies[ $taxonomy_name ]->rest_controller_class = 'WP_REST_Terms_Controller';
  }
}

add_filter ('rest_query_vars', 'my_add_meta_vars');
