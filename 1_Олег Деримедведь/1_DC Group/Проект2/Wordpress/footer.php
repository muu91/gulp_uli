</main>
  <!-- FOOTER -->
  <footer class="main_footer">
    <div class="container">
      <div class="footer__content">
        <ul class="social_icons">
          <?php

            if( have_rows('social_links', 'options') ):

              while ( have_rows('social_links', 'options') ) : the_row();?>
                <li>
                  <a href="<?php the_sub_field('link');?>" target="_blank">
                    <i class="fab <?php the_sub_field('fontawesome_class');?>"></i>
                  </a>
                </li>

              <?php endwhile;

            endif;

          ?>
          
        </ul>
        <p class="copiright"><?php the_field('copyright_text', 'options');?></p>
        <?php 
          wp_nav_menu([
            'theme_location' => 'foot-menu',
            'container' => false,
            'menu_class' => 'others_a',
          ]);
        ?>
      </div>
    </div>
  </footer>
  <!--END FOOTER -->



  <?php wp_footer(); ?>
	</body>
</html>
