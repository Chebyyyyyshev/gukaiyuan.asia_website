import { GraduationCap, MapPin } from "lucide-react";

import { profileConfig } from "@/config/site";

export function ProfileSummary() {
  return (
    <section
      className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8"
      aria-labelledby="profile-summary-title"
    >
      <div className="rounded-[var(--radius-card)] border border-border bg-elevated p-6 shadow-[var(--shadow-soft)] md:p-8">
        <p className="text-sm font-medium uppercase text-accent">PROFILE</p>
        <h2
          id="profile-summary-title"
          className="mt-3 text-2xl font-semibold leading-tight text-text-primary md:text-3xl"
        >
          {profileConfig.name}
          <span className="mt-1 block text-lg font-medium text-text-secondary md:text-xl">
            / {profileConfig.englishName}
          </span>
        </h2>
        <p className="mt-5 text-lg font-medium leading-8 text-text-primary">
          {profileConfig.role}
        </p>

        {profileConfig.school || profileConfig.location ? (
          <dl className="mt-6 grid gap-3 border-t border-border pt-5 text-[15px] text-text-secondary sm:grid-cols-2">
            {profileConfig.school ? (
              <div className="flex min-w-0 items-center gap-3">
                <GraduationCap aria-hidden="true" size={18} strokeWidth={1.8} />
                <div className="min-w-0">
                  <dt className="sr-only">学校</dt>
                  <dd>{profileConfig.school}</dd>
                </div>
              </div>
            ) : null}
            {profileConfig.location ? (
              <div className="flex min-w-0 items-center gap-3">
                <MapPin aria-hidden="true" size={18} strokeWidth={1.8} />
                <div className="min-w-0">
                  <dt className="sr-only">所在地</dt>
                  <dd>{profileConfig.location}</dd>
                </div>
              </div>
            ) : null}
          </dl>
        ) : null}
      </div>

      <div className="flex min-w-0 flex-col justify-center border-y border-border py-6 md:py-8">
        <h3 className="text-sm font-medium uppercase text-accent">关注方向</h3>
        <ul className="mt-5 flex flex-wrap gap-2.5" aria-label="技术关注方向">
          {profileConfig.focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-border bg-surface px-3.5 py-2 text-[15px] font-medium text-text-primary"
            >
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary">
          {profileConfig.shortBio}
        </p>
      </div>
    </section>
  );
}
