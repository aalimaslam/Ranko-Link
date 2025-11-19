export function Heading({colored, black, description} : {colored: string, black: string, description?: string}){
    return (
        <div className="text-center mb-14 space-y-4">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {colored}
            </span>{" "}
            {black}
          </h2>
          {description && (
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We combine technical precision, creative content, and strategic link building
            to grow your search visibility and ROI sustainably.
          </p>
        )}
        </div>
    )
}