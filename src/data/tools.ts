/**
 * Central registry of molpath.tools applications.
 *
 * To add a new tool, append an entry here. The homepage and any
 * future listing pages derive from this file — single source of truth.
 */

export interface Tool {
  /** URL-safe slug used for anchors and CSS classes */
  slug: string;
  /** Display name */
  name: string;
  /** One-line tagline shown on the card */
  tagline: string;
  /** Longer clinical/technical description (2–3 sentences) */
  description: string;
  /** Live tool URL */
  url: string;
  /** GitHub repository URL (omit if not public yet) */
  github?: string;
  /** Published manuscript DOI or URL (omit if not published yet) */
  manuscript?: string;
  /** Short domain/category label shown as a pill */
  category: string;
  /** Status badge */
  status: 'live' | 'beta' | 'coming-soon';
}

export const tools: Tool[] = [
  {
    slug: 'tumor-likelihood',
    name: 'Tumor Likelihood Tool',
    tagline: 'Rank likely cancer origins from somatic events',
    description:
      'Submit mutations and copy-number alterations to rank probable tumor types using AACR GENIE prevalence priors. Posterior likelihoods guide differential diagnosis for cancers of unknown primary.',
    url: 'https://tumor-likelihood.molpath.tools/',
    github: 'https://github.com/viktorlj/tumor-likelihood-tool',
    category: 'Cancer genomics',
    status: 'live',
  },
  {
    slug: 'ec-molsubtype',
    name: 'EC Molecular Subtyping',
    tagline: 'WHO 2020 endometrial cancer classification',
    description:
      'Upload a MAF file to classify endometrial carcinomas into POLEmut, MMRd, p53abn, or NSMP. Integrates sequencing data with optional IHC results per WHO 2020 criteria and Swedish national guidelines.',
    url: 'https://ec-molsubtype.molpath.tools/',
    github: 'https://github.com/viktorlj/ec-molsubtype',
    category: 'Gynecologic pathology',
    status: 'live',
  },
  {
    slug: 'max-overtime',
    name: 'Max Overtime',
    tagline: 'Compare NGS variant data between two timepoints',
    description:
      'Visualize and compare next-generation sequencing results across two timepoints — for instance baseline vs. relapse — to track clonal evolution and emerging resistance mutations.',
    url: 'https://max-overtime.molpath.tools/',
    github: 'https://github.com/viktorlj/max-overtime',
    category: 'NGS analysis',
    status: 'live',
  },
  {
    slug: 'alascca-classify',
    name: 'ALASCCA-classify',
    tagline: 'PI3K pathway classification for CRC aspirin eligibility',
    description:
      'Classify PI3K pathway alterations in colorectal cancer to determine eligibility for adjuvant aspirin therapy per the ALASCCA trial (Martling et al., NEJM 2025). Covers Group A (PIK3CA hotspots) and Group B (PIK3CA, PIK3R1, PTEN) alterations.',
    url: 'https://alassca-classify.molpath.tools/',
    github: 'https://github.com/viktorlj/alascca-classify',
    category: 'Colorectal cancer',
    status: 'live',
  },
];
