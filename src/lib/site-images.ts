/**
 * ============================================================
 *  ALL PICTURES USED ON THE SITE ARE LISTED HERE
 * ------------------------------------------------------------
 *  To change a picture: replace the file it points to.
 *  To remove a picture: set its value to `null`.
 *  Nothing else in the site needs to be touched.
 * ============================================================
 */

import logo from "@/assets/logo.jpg";
import ceo from "@/assets/ceo.png";
import viceCeo from "@/assets/vice-ceo.png";
import cto from "@/assets/cto.png";
import cfo from "@/assets/cfo.jpg";
import coo from "@/assets/coo.jpg";


import heroBackground from "@/assets/hero-bg.jpg";
import aboutTeamPhoto from "@/assets/about-1.jpg";
import aboutWorkPhoto from "@/assets/about-2.jpg";

/** Company logo (top bar + footer) */
export const LOGO_IMAGE: string | null = logo;
/** Big picture behind the title at the top of the page */
export const HERO_IMAGE: string | null = heroBackground;

/** The two pictures in the "About" area */
export const ABOUT_IMAGE_MAIN: string | null = aboutTeamPhoto;
export const ABOUT_IMAGE_SMALL: string | null = aboutWorkPhoto;

/** Leadership photos. `null` = empty slot with initials shown instead. */
export const TEAM_IMAGES: Record<string, string | null> = {
  ceo: ceo,
  viceCeo: viceCeo,
  cto: cto,
  coo: coo, // Ihuzuwizera Louna
  cfo: cfo,
};
