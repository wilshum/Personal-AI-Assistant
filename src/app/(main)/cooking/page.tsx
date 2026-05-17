import { AreaHero } from "@/components/AreaHero";
import { SectionShell } from "@/components/SectionShell";

export default function CookingPage() {
  return (
    <SectionShell
      title="Cooking"
      subtitle="Plan meals, save recipes, and keep a simple grocery flow so cooking feels automatic instead of stressful."
    >
      <div className="space-y-8">
        <AreaHero
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
          title="Cooking inspiration"
          description="A food-forward hero image that brings the kitchen to life, paired with recipe platform logos for easy reference."
          logos={[
            { href: "https://www.allrecipes.com/", src: "https://logo.clearbit.com/allrecipes.com", title: "AllRecipes" },
            { href: "https://www.bonappetit.com/", src: "https://logo.clearbit.com/bonappetit.com", title: "Bon Appétit" },
            { href: "https://www.budgetbytes.com/", src: "https://logo.clearbit.com/budgetbytes.com", title: "Budget Bytes" },
          ]}
        />
        <div className="space-y-6">
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Use this tab</h2>
            <p className="mt-1 text-sm text-zinc-600">Keep meal plans, recipes, and grocery notes in one place.</p>
          </div>
          <p className="text-sm text-zinc-600">Track your favorite dishes, weekly menus, and shopping lists so cooking stays simple and repeatable.</p>
        </div>

        {/* Recipe Resources */}
        <div className="space-y-4 rounded-xl border border-dashed border-orange-200 bg-orange-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Recipe Platforms</h2>
            <p className="mt-1 text-sm text-zinc-600">Find and save your favorite recipes</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.allrecipes.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  AllRecipes - Recipe Search & Reviews
                </a>
              </li>
              <li>
                <a href="https://www.bonappetitmag.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Bon Appétit - Gourmet Recipes
                </a>
              </li>
              <li>
                <a href="https://www.budgetbytes.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Budget Bytes - Affordable Recipes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Meal Planning */}
        <div className="space-y-4 rounded-xl border border-dashed border-green-200 bg-green-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Meal Planning Tools</h2>
            <p className="mt-1 text-sm text-zinc-600">Organize weekly menus and shopping lists</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://mealime.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Mealime - Smart Meal Planning
                </a>
              </li>
              <li>
                <a href="https://www.eatthismuch.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Eat This Much - AI Meal Planner
                </a>
              </li>
              <li>
                <a href="https://www.google.com/shopping/express/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Google Express - Grocery Delivery
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Cooking Techniques */}
        <div className="space-y-4 rounded-xl border border-dashed border-amber-200 bg-amber-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Cooking Education</h2>
            <p className="mt-1 text-sm text-zinc-600">Learn techniques and improve your skills</p>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li>
                <a href="https://www.youtube.com/@kenji" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Kenji López-Alt (YouTube) - Professional Cooking
                </a>
              </li>
              <li>
                <a href="https://www.masterclass.com/classes/gordon-ramsay-teaches-cooking" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  MasterClass - Gordon Ramsay Cooking
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Sortedfood" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Sorted Food (YouTube) - Kitchen Hacks
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Your Repeat Winners */}
        <div className="space-y-4 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Your Repeat Winners</h2>
            <p className="mt-1 text-sm text-zinc-600">Recipes you love and make regularly</p>
          </div>
          <p className="text-sm text-zinc-600">Use the notes panel to save your go-to recipes, weekly meal plans, and grocery list templates.</p>
        </div>

        {/* YouTube Videos */}
        <div className="space-y-4 rounded-xl border border-dashed border-red-200 bg-red-50/50 p-6">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Cooking Inspiration</h2>
            <p className="mt-1 text-sm text-zinc-600">Video tutorials and technique guides</p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://www.youtube.com/watch?v=RhVl-iGDRjI" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-red-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/RhVl-iGDRjI/maxresdefault.jpg" alt="Easy Dinner" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Quick Weeknight Meals</p>
                <p className="text-xs text-zinc-500 mt-1">Kenji López-Alt</p>
              </div>
            </a>
            <a href="https://www.youtube.com/watch?v=_yPWI0_mVqA" target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-zinc-200 hover:border-red-400 hover:shadow-md transition-all">
              <div className="relative bg-zinc-100 aspect-video">
                <img src="https://img.youtube.com/vi/_yPWI0_mVqA/maxresdefault.jpg" alt="Cooking Basics" className="w-full h-full object-cover group-hover:brightness-110 transition" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white text-lg">›</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-xs font-medium text-zinc-900">Cooking Fundamentals</p>
                <p className="text-xs text-zinc-500 mt-1">Gordon Ramsay</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>
    </SectionShell>
  );
}

