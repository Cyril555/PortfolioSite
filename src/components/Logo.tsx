import styles from "./Logo.module.css";

/**
 * CV monogram drawn as one continuous stroke: the C's upper terminal
 * becomes the V's left arm, so the two letters are literally connected.
 */
export const MONOGRAM_PATH = "M15.5 23.5A8.2 8.2 0 1 1 15.5 8.5L21 23.5L26.5 8.5";

export default function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg
      className={styles.logo}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path className={styles.trace} d={MONOGRAM_PATH} pathLength={1} />
      <path className={styles.stroke} d={MONOGRAM_PATH} pathLength={1} />
      <rect className={styles.node} x="13.9" y="6.9" width="3.2" height="3.2" />
    </svg>
  );
}
