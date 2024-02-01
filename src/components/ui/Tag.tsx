export default function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-xs text-slate-500 bg-gray-100 px-[6px] py[4px] rounded-3xl">
            {children}
        </span>
    );
}
