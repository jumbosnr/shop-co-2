import React, { useState } from 'react';

function FilterSidebar() {
  // State for filter options (if needed)

  return (
    <aside className="filter max-w-6xl mx-auto px-12 border-2 border-gray-400 rounded-xl h-[calc(100%-100px)]">
      <FilterSection title="Filters">
        <FilterItem href="">T-Shirts</FilterItem>
        <FilterItem href="">Shorts</FilterItem>
        {/* ... other category items */}
      </FilterSection>

      <FilterSection title="Price">
        <PriceSlider />
      </FilterSection>

      <FilterSection title="Colors">
        <ColorPicker />
      </FilterSection>

      <FilterSection title="Size">
        <SizeSelector />
      </FilterSection>

      <FilterSection title="Dress Style">
        <FilterItem href="">Casual</FilterItem>
        <FilterItem href="">Formal</FilterItem>
        {/* ... other style items */}
      </FilterSection>
    </aside>
  );
}

// Component for each filter section
function FilterSection({ title, children }) {
  return (
    <div className="border-b-2 py-2">
      <h4 className="text-2xl font-semibold text-black py-2">{title}</h4>
      {children}
    </div>
  );
}

// Component for filter items
function FilterItem({ href, children }) {
  return <a href={href} className="text-gray-500 text-base font-normal">{children}</a>;
}

// Component for the price slider (implement logic here)
function PriceSlider() {
  // ...
}

// Component for color selection (implement logic here)
function ColorPicker() {
  // ...
}

// Component for size selection (implement logic here)
function SizeSelector() {
  // ...
}

export default FilterSidebar;